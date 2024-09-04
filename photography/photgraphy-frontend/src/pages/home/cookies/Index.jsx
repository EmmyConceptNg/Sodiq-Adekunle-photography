import { Box } from "@mui/material";
import { Helmet } from "react-helmet";


import Header from "../../../components/layouts/landing/Header";
import Footer from "../../../components/layouts/Footer";
import { Content } from "./Content";


export default function Cookies() {
  return (
    <Box>
      <Helmet>
        <title>Prince - Cookies</title>
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
