import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Landing } from "../pages/landing/landing";
import { Register } from "../pages/register/register";
import { BMICalculator } from "../pages/bmi-calculator/bmi-calculator";
import DisplayBMI from "../pages/bmi-display/displayCard";

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
    path: "/bmi",
    Component: DisplayBMI,
  },
]);

export default routes;
