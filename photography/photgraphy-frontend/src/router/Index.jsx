import { useRoutes } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes.jsx";
import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes.jsx";

export const Routes = () => {
  return useRoutes([
    ...HomeRoutes(),
    ...AuthRoutes(),
    ...DashboardRoutes(),
  ]);
};
