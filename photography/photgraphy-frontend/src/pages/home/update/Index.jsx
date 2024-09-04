import { Box, Grid } from "@mui/material";
import Header from "../../../components/layouts/landing/Header";

import { Title } from "./Title";
import { Categories } from "./Categories";
import { Posts } from "./Posts";
import Footer from "../../../components/layouts/Footer";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import AddUpdatesModal from "../../../components/modals/updateModal/AddUpdatesModal";

export function Updates() {
  const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`/api/updates`).then((response) => {
      setUpdate(response.data.content.content);
    });
  }, []);

   const location = useLocation();

   useEffect(() => {
     const searchParams = new URLSearchParams(location.search);
     if (searchParams.has("add")) {
      setOpen(true)
     }
   }, [location]);

  return (
    <>
      <Header />
      <Box mx={{ xs: 2, md: 15 }} my={{ xs: 5, md: 5 }}>
        <Box
          sx={{
            background: {
              md: "url('/svgs/Hero-Bg.svg') top center / contain no-repeat",
              xs: "url('/svgs/Hero-BgSm.svg') bottom center / cover no-repeat",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: { md: "center", xs: "center" },
          }}
          pb={40}
        >
          <Text
            color="#fff"
            ff="Helvetica Neue"
            fw="700"
            fs={{ md: "44px", lg: "44px", sm: "30px", xs: "20px" }}
            sx={{
              mb: "0px",
              textAlign: {
                lg: "center",
                md: "center",
                sm: "center",
                xs: "center",
              },
              mx: {
                md: "0px",
                lg: "150px",
                xl: "300px",
                sm: "0px",
                xs: "30px",
              },
              mt: 10,
            }}
          >
            Project <span style={{ color: "#2DDB81" }}>Update</span>
          </Text>
          <Text
            color="#fff"
            fw="400"
            fs={{ md: "15px", lg: "15px", sm: "10px", xs: "9px" }}
            sx={{
              textAlign: {
                lg: "center",
                md: "center",
                sm: "center",
                xs: "center",
              },
              mx: {
                md: "0px",
                lg: "150px",
                xl: "500px",
                sm: "20px",
                xs: "30px",
              },
              mt: 5,
            }}
          >
            {update}
          </Text>
          <Box display="flex" justifyContent="center">
            <Button
              sx={{ mt: 5 }}
              type="submit"
              height="56px"
              width="280px"
              variant="contained"
              onClick={() => navigate('/landing?waitlist')}
            >
              Join the waitlist
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
      <AddUpdatesModal open={open} setOpen={setOpen} setUpdates={setUpdate} updates={update} />
    </>
  );
}
