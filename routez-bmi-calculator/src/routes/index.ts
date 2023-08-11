import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/login";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default routes;
