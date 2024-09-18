import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";


export default function SinglePortfolio() {

  return (
    <Box>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Box>
        <Box width="100%"  pt={2}>
          <Hero />
        </Box>
      </Box>
    </Box>
  );
}
