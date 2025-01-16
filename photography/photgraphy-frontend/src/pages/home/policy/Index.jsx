import { Box, Grid2, Skeleton } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../../components/layouts/home/Header";
import Footer from "../../../components/layouts/Footer";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import Action from "../../../components/Action";

export default function Policy() {
  const [admin, setAdmin] = useState({});
  const [loadPage, setLoadPage] = useState(true);

  useEffect(() => {
    axios
      .get("/api/auth/admin-user")
      .then((response) => {
        setAdmin(response.data.user);
        setLoadPage(false)
      })
      .catch((error) => {
        console.log("Cant get admin user: ", error);
      });
  }, []);

  return (
    <Box>
      <Helmet>
        <title>Policy</title>
      </Helmet>
      <Box>
        <Box width="100%" height="100vh" pt={2}>
          <Header />
          {loadPage ? (
            <Grid2
              container
              spacing={3}
              sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
            >
              <Grid2 size={{ md: 4, xs: 12 }}>
                <Skeleton
                  variant="rounded"
                  sx={{ bgcolor: "#121214" }}
                  width="100%"
                  height={500}
                />
              </Grid2>
              <Grid2 size={{ md: 8, xs: 12 }}>
                <Skeleton
                  variant="rounded"
                  sx={{ bgcolor: "#121214" }}
                  width="100%"
                  height={500}
                />
              </Grid2>
            </Grid2>
          ) : (
            <Hero admin={admin} />
          )}
          <Action />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
