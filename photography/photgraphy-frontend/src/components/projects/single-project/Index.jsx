import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../layouts/home/Header";
import Footer from "../../layouts/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Action from "../../Action";


export default function SingleProject() {

  return (
    <Box>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Box>
        <Box width="100%" height="100vh" pt={2}>
          <Header />
          <Hero />
          <Action />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
