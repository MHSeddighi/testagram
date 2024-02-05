import Navigation from "@core/router/Navigation";

var routes = [
  { name: "CoreServices", src: "/src/@core/router/Router" },
  { name: "Navigation", src: "/src/@core/router/Navigation" },
];

async function setupGlobalConfigs() {
  for (let route of routes) {
    var script = await import(route.src);
    window[route.name] = script.default;
  }
}

export default setupGlobalConfigs;
