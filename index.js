import Router from "@core/router/Router";
import CoreServices from "@core/index";
import Home from "src/pages/home/Home";
import Profile from "src/pages/profile/Profile";
import Login from "src/pages/auth/login/Login";
import Register from "src/pages/auth/register/Register";
import setupGlobalConfigs from "@core/GlobalSources";

CoreServices.setupListeners();

Router.defineRoutes([
  { name: "home", component: Home },
  { name: "profile", component: Profile },
  { name: "login", component: Login },
  { name: "register", component: Register },
]);

setupGlobalConfigs();