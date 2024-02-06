import Router from "@core/router/Router";
import CoreServices from "@core/index";
import Home from "src/pages/home/Home";
import Profile from "src/pages/profile/Profile";
import Login from "src/pages/auth/login/Login";
import Register from "src/pages/auth/register/Register";
import setupGlobalConfigs from "@core/GlobalSources";
import NewPost from "src/views/post/NewPost";

CoreServices.setupListeners();

Router.defineRoutes([
  { name: "home", component: Home, auth: true },
  { name: "profile", component: Profile, auth: true },
  { name: "login", component: Login, auth: false },
  { name: "register", component: Register, auth: false },
  { name: "new-post", component: NewPost, auth: true },
]);

setupGlobalConfigs();
