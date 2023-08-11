import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
]);

export default routes;
