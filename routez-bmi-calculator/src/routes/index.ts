import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/login";
import { Landing } from '../pages/landing/landing'

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default routes;
