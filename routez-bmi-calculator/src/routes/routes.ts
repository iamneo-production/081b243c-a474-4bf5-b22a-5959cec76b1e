import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Landing } from "../pages/landing/landing";
import { Register } from "../pages/register/register";
import { BMICalculator } from "../pages/bmi-calculator/bmi-calculator";
import { Gender } from "../pages/gender/gender";

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
    path: "/register",
    Component: Register,
  },
  {
    path: "/calculator",
    Component: BMICalculator,
  },
  {
    path: "/gender",
    Component: Gender,
  },
]);

export default routes;
