import SingleProject from "../components/projects/single-project/Index";
import About from "../pages/home/about/Index";
import Contact from "../pages/home/contact/Index";
import Home from "../pages/home/landing/Index";
import Policy from "../pages/home/policy/Index";
import SinglePortfolio from "../pages/home/portfolio/single-portfolio/Index";
import Services from "../pages/home/services/Index";
import Works from "../pages/home/works/Index";

export const HomeRoutes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/policy", element: <Policy /> },
    { path: "/portfolio", element: <Works /> },
    { path: "/portfolio/:id", element: <SinglePortfolio /> },
    { path: "/service", element: <Services /> },
    { path: "/contact", element: <Contact /> },
  ];
};
