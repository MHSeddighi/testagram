const routes = [];
function addRoute(name, component) {}

function defineRoutes(routesArray) {
  routesArray.forEach((r, index) => {
    routes.push({ name: r.name, component: r.component });
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

function getRouteComponent(routeName) {
  for (let r of routes) {
    if (r.name === routeName) {
      return r.component;
    }
  }
  return null;
}

export default {
  addRoute,
  defineRoutes,
  getRoutes,
  routeExists,
  getRouteComponent,
};
