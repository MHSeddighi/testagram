import CoreServices from "./Router";

function handleRouteChange() {
  if (window.location.pathname == "" || window.location.pathname == "/") {
    navigateTo("/home");
  } else {
    navigateTo(window.location.pathname);
  }
}

async function loadPageComponentContent(html) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(html, "text/html");
  const rootElement = parsedDocument.body;

  const mainTag = document.querySelector("main");
  mainTag.innerHTML = rootElement.innerHTML;
  var children = mainTag.querySelectorAll("*");

  for (let i in children) {
    if (isCustomTag(children[i].tagName)) {
      await renderComponent(children[i]);
    }
  }
  reloadScriptTags();
}

function reloadScriptTags() {
  const scripts = document.querySelectorAll("main script");
  console.log(scripts);
  scripts.forEach((script) => {
    console.log(script);
    const newScript = document.createElement("script");
    if (script.src) {
      newScript.src = script.src;
    } else {
      newScript.textContent = script.textContent;
    }
    script.parentNode.replaceChild(newScript, script);
  });
}

function isCustomTag(tagName) {
  return tagName ? tagName.toLowerCase().startsWith("x-") : false;
}

function removeSlashFromPath(path) {
  if (path.startsWith("/")) {
    path = path.substring(1, path.length);
  }
  if (path.endsWith("/")) {
    path = path.substring(0, p.length - 1);
  }
  return path;
}

function navigateTo(url) {
  renderPageComponent(url);
}

function checkUserIsLoggedIn() {
  const userDataString = localStorage.getItem("userData");
  if (userDataString) {
    return true;
    // const userData = JSON.parse(userDataString);

    // Use the user data as needed
    console.log(userData.name); // 'John Doe'
    console.log(userData.email); // 'johndoe@example.com'
  }
  return false;
}

function renderPageComponent(url) {
  const path = removeSlashFromPath(url);
  const route = CoreServices.getRoute(path);
  console.log(route);
  if (checkUserIsLoggedIn() == route.auth) {
    if (route.component) {
      const htmlContent = route.component();
      window.history.pushState({}, "", `/${path}`);
      loadPageComponentContent(htmlContent);
    } else {
      navigateTo(`404`, false);
    }
  } else {
    if (route.auth) {
      navigateTo("login");
    } else {
      navigateTo("home");
    }
  }
}

async function renderComponent(element) {
  try {
    const component = await import(element.getAttribute("src"));
    var attrs = {};
    for (let i of element.attributes) {
      attrs[i.name] = i.value;
    }
    const html = component.default(attrs);
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(html, "text/html");
    const newElement = parsedDocument.body.childNodes[0];
    element.parentNode.replaceChild(newElement, element);
    reloadScriptTags();
  } catch (e) {
    console.error(e);
  }
}

function setupListeners() {
  window.addEventListener("load", handleRouteChange);
  window.addEventListener("popstate", handleRouteChange);
  window.addEventListener("hashchange", handleRouteChange);
}

async function loadScript(url, name) {
  const newScript = document.createElement("script");
  newScript.type = "module";
  var script = await import(url);
  window[name] = script;
  newScript.textContent = getScriptString(script.default);
  document.body.appendChild(newScript);
}

function getScriptString(obj) {
  var str = "";
  for (let i in obj) {
    str += obj[i].toString() + "\n";
  }
  return str;
}

const Navigation = {
  setupListeners,
  navigateTo,
  loadScript,
  getScriptString,
  renderComponent,
  renderPageComponent,
  isCustomTag,
  loadPageComponentContent,
  removeSlashFromPath,
  reloadScriptTags,
};

export default Navigation;
