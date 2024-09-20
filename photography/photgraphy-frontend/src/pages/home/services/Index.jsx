import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Header from "../../../components/layouts/home/Header";
import Footer from "../../../components/layouts/Footer";

import ServiceSection from "./ServiceSection";
import Action from "../../../components/Action";

export default function Services() {
  return (
    <Box>
      <Helmet>
        <title>Works</title>
      </Helmet>
      <Box>
        <Box width="100%" height="100vh" pt={2}>
          <Header />
          <ServiceSection />
          <Action />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
