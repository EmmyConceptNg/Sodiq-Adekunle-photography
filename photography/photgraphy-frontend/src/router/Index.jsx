import { useRoutes } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes.jsx";
import { AuthRoutes } from "./AuthRoutes";
import { AdminRoutes } from "./AdminRoutes.jsx";


export const Routes = () => {
  return useRoutes([
    ...HomeRoutes(),
    ...AuthRoutes(),
    ...AdminRoutes()
  ]);
};
