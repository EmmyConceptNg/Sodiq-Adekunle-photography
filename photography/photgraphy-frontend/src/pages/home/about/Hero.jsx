import {  Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import { Link } from "react-scroll";
import Image from "../../../components/Image";
import { useNavigate } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getImageUrl } from "../../../api/axios";



export default function Hero({ admin }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  return (
    <>
      <Grid
        container
        spacing={5}
        sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
        ref={ref}
      >
        <PersonalInfo admin={admin} />
        <About admin={admin} />
      </Grid>
    </>
  );
}

function PersonalInfo({admin}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#121214",
        p: { md: "40px", xs: "20px" },
        border: "1px solid rgba(0,0,0,.05)",
        borderRadius: "20px",
        boxShadow:
          "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
        textAlign: "center",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      ref={ref}
    >
      <Image
        src={admin?.image ? getImageUrl(admin?.image) : "/icons/profile.png"}
        alt={admin?.firstName}
        sx={{ borderRadius: "20px" }}
      />
    </Grid>
  );
}

function About({admin}) {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }

  return (
    <Grid
      size={{ xs: 12, md: 8 }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      ref={ref}
      
    >
      <Stack spacing={5}>
        <Box
          bgcolor="#121214"
          sx={{
            p: { md: "40px", xs: "20px" },
            border: "1px solid rgba(0,0,0,.05)",
            borderRadius: "20px",
            boxShadow:
              "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          }}
        >
          <Text
            fs={{ md: "32px", xs: "24px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            About Us
          </Text>
          <Text
            fs={{ md: "18px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
           {admin?.about}
          </Text>
          
          <Button
            sx={{ mt: 3 }}
            onClick={() => navigate("/contact")}
            height="40px"
            variant="contained"
            color="#2DDB81"
          >
            Get in touch
          </Button>
        </Box>
      </Stack>
    </Grid>
  );
}

