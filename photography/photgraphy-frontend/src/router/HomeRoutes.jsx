import SingleProject from "../components/projects/single-project/Index";
import About from "../pages/home/about/Index";
import Contact from "../pages/home/contact/Index";
import Home from "../pages/home/landing/Index";
import Services from "../pages/home/services/Index";
import Works from "../pages/home/works/Index";

export const HomeRoutes = () => {
  return [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/works", element: <Works /> },
    { path: "/works/:id", element: <SingleProject /> },
    { path: "/service", element: <Services /> },
    { path: "/contact", element: <Contact /> },
  ];
};
