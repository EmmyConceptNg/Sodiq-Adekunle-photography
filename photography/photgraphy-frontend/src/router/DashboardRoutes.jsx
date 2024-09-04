import { Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Index";
import DashboardLayout from "../components/layouts/dashboard/Index";
import { Blogs } from "../pages/dashboard/blogs/Index";

export const DashboardRoutes = () => {
  return [
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="app" />, index: true },
        {
          path: "app",
          element: <Dashboard />,
        },
        {
          path: "news",
          element: <Blogs />,
        },
      ],
    },
  ];
};
