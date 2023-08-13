import { createBrowserRouter } from "react-router-dom";
// import {Login} from "../pages/login";
import { Login } from "../pages/login/login";
import { Gender } from "../pages/gender/gender";
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
  {
    path: "/gender",
    Component: Gender,
  },
]);

export default routes;
