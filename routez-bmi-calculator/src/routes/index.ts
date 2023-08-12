import { createBrowserRouter } from "react-router-dom";
// import {Login} from "../pages/login";
import { Login } from "../pages/login/login";
import { Gender } from "../pages/gender/gender";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/gender",
    Component: Gender,
  },
]);

export default routes;
