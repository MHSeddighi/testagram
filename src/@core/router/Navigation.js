import { getRouteComponent } from "./Router";

function handleRouteChange() {
  if (window.location.pathname == "" || window.location.pathname == "/") {
    navigateTo("/home");
  } else {
    navigateTo(window.location.pathname);
  }
}

function loadHtmlContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const rootElement = parsedDocument.body.querySelector(":not(script) > *");
  document.querySelector("main").innerHTML = rootElement.innerHTML;
  const scripts = parsedDocument.querySelectorAll("script");
  scripts.forEach((script) => {
    const newScript = document.createElement("script");
    if (script.src) {
      newScript.src = script.src;
    } else {
      newScript.textContent = script.textContent;
    }
    document.body.appendChild(newScript);
  });
}

function isCustomTag(tagName) {
  var element = document.createElement(tagName);
  return element.constructor === window.HTMLUnknownElement;
}

async function navigateTo(url) {
  var path = url.startsWith("/") ? url.substring(1, url.length) : url;
  path = path.endsWith("/") ? path.substring(0, path.length - 1) : path;
  const component = getRouteComponent(url);
  if (component) {
    window.history.pushState({}, "", `/${path}`);
    const htmlContent = component();
    loadHtmlContent(htmlContent);
  } else {
    navigateTo(`404`, false);
  }
}

async function navigateTo2(url, errorHandling = true) {
  if (url) {
    var path = url.startsWith("/") ? url.substring(1, url.length) : url;
    path = path.endsWith("/") ? path.substring(0, path.length - 1) : path;
    window.history.pushState({}, "", `/${path}`);
    await fetch(`/pages/${path}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.text();
      })
      .then((html) => {
        loadHtmlContent(html);
      })
      .catch((error) => {
        if (errorHandling) {
          if (error.status === 404) {
            navigateTo(`404`, false);
          } else if (error.status === 300) {
            navigateTo(`300`, false);
          } else if (error.status === 500) {
            navigateTo(`500`, false);
          }
        }
        console.error(error);
      });
  }
}

function setupListeners() {
  window.addEventListener("load", handleRouteChange);
  window.addEventListener("popstate", handleRouteChange);
  window.addEventListener("hashchange", handleRouteChange);
}

const Navigation = {
  setupListeners,
  navigateTo,
};

export default Navigation;
