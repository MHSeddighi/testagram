import { defineRoutes } from "@core/router/Router";
import { setupListeners } from "@core/index";
import Home from "src/pages/Home";
import Profile from "src/pages/Profile";

setupListeners();

defineRoutes([
  { name: "home", component: Home },
  { name: "profile", component: Profile },
]);
