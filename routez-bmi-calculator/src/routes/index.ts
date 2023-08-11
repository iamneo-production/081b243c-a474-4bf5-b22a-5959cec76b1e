import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import GenderSelector from "../pages/GenderSelector";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: '/select',
    Component: GenderSelector,
  }
]);

export default routes;
