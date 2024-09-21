import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../../components/layouts/home/Header";
import Footer from "../../../components/layouts/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Action from "../../../components/Action";
import axios from '../../../api/axios'


export default function Contact() {
 const [admin, setAdmin] = useState({});
  const [loadPage, setLoadPage] = useState(true);

  useEffect(() => {
    axios
      .get("/api/auth/admin-user")
      .then((response) => {
        setAdmin(response.data.user);
      })
      .catch((error) => {
        console.log("Cant get admin user: ", error);
      });
  }, []);
  return (
    <Box>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Box>
        <Box width="100%" height="100vh" pt={2}>
          <Header />
          <Hero admin={admin} />
          <Action admin={admin} />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
