import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Header from "../../../components/layouts/home/Header";
import Footer from "../../../components/layouts/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Action from "../../../components/Action";
import Projects from "../../../components/projects/Index";


export default function Works() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("waitlist")) {
      scroller.scrollTo("waitlist", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);
  return (
    <Box>
      <Helmet>
        <title>Works</title>
      </Helmet>
      <Box>
        <Box width="100%" height="100vh" pt={2}>
          <Header />
          <Projects />
          <Action />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
