import {  Box, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import { Link } from "react-scroll";
import Image from "../../../components/Image";
import { useNavigate } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Email, LocationOnSharp, Phone } from "@mui/icons-material";


const addresses = [
  {
    icon: <LocationOnSharp sx={{ color: "#2ddb81" }} />,
    name: "Our Office",
    detail: "Lagos, Nigeria",
    link: "",
  },
  { icon: <Phone  sx={{ color: "#2ddb81" }} />, name: "Contact Number", detail: "+2348138383938", link: "" },
  { icon: <Email  sx={{ color: "#2ddb81" }} />, name: "Email Us", detail: "emmyconceptng@gmail.com", link: "" },
];


export default function Hero() {
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
        <Address />
        <About />
      </Grid>
      
    </>
  );
}

function Address() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
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
      {addresses.map(({ icon, name, detail, link }, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          mb={3}
        >
          <Box>
            <Box display="flex" justifyContent="flex-start">
              {icon}
            </Box>
            <Text
              sx={{ textAlign: "left", my: 0 }}
              fs="14px"
              fw="500"
              color="gray"
            >
              {name}
            </Text>
            <Text
              sx={{ textAlign: "left", my: 0 }}
              fs="18px"
              fw="600"
              color="#fff"
            >
              {detail}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

function About() {
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
          >
            Contact Us
          </Text>
          <Text
            fs={{ md: "18px", xs: "12px" }}
            fw="500"
            color="gray"
            sx={{ mb: 3 }}
          >
           Get in touch
          </Text>
          <Form />
        </Box>
      </Stack>
    </Grid>
  );
}


function Form (){
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ md: 6, xs: 12 }}>
          <TextField
            fullWidth
            placeholder="Full Name"
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <TextField
            fullWidth
            placeholder="Email Address"
            type="email"
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Grid>
        <Grid size={{ md: 12, xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Message"
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Grid>
        <Button variant="contained" height="40px">
          Send Message
        </Button>
      </Grid>
    </>
  );
}

