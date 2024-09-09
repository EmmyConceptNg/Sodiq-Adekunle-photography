import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../../components/layouts/home/Header";
import Footer from "../../../components/layouts/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Action from "./Action";
import Experience from "./Experience";
import Testimonial from "./Testimonial";

export default function About() {

  return (
    <Box>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Box>
        <Box width="100%" height="100vh" pt={2}>
          <Header />
          <Hero />
          <Testimonial />
          <Experience />
          <Action />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
