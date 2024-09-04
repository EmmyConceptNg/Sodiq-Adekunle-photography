import { Box } from "@mui/material";
import { Helmet } from "react-helmet";


import Header from "../../../components/layouts/landing/Header";
import Footer from "../../../components/layouts/Footer";
import { Content } from "./Content";


export default function Privacy() {
  return (
    <Box>
      <Helmet>
        <title>Prince - Privacy</title>
      </Helmet>
      <Box>
        <Box width="100%" bgcolor="" pt={2}>
          <Header />
          <Content />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
