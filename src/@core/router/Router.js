const routes = [];
function addRoute(name, component) {}

function defineRoutes(routesArray) {
  routesArray.forEach((r, index) => {
    routes.push({ name: r.name, component: r.component, auth: r.auth });
  });
}

function getRoutes() {
  return routes;
}

function routeExists(routeName) {
  for (let r of routes) {
    if (r.name === routeName) {
      return true;
    }
  }
  return false;
}

function getRoute(routeName) {
  for (let r of routes) {
    if (r.name === routeName) {
      return r;
    }
  }
  return null;
}

export default {
  addRoute: addRoute,
  defineRoutes: defineRoutes,
  getRoutes: getRoutes,
  routeExists: routeExists,
  getRoute: getRoute,
};
