import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../../../components/layouts/home/Header";
import Action from "../../../../components/Action";
import Footer from "../../../../components/layouts/Footer";


export default function SinglePortfolio() {
  return (
    <Box>
      <Helmet>
        <title>Sodiq Adekunle Photography - Portfolio</title>
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
