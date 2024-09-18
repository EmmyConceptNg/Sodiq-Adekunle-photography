import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/layouts/dashboard/Index";
import Dashboard from "../pages/admin/dashboard/Index";
import Services from "../pages/admin/services/Index";
import Portfolio from "../pages/admin/portfolio/Index";
import SinglePortfolio from "../pages/admin/portfolio/single-portfolio/Index";
import EducationAndExperience from "../pages/admin/education-and-experience/Index";
import Settings from "../pages/admin/settings/Index";

export const AdminRoutes = () => {
  return [
    {
      path: "/admin",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="dashboard" />, index: true },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "portfolio/:id",
          element: <SinglePortfolio />,
        },
        {
          path: "education-and-experience",
          element: <EducationAndExperience />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ];
};
