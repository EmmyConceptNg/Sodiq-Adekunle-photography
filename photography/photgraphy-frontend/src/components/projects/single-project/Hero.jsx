import {  Box, CardMedia, Dialog, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../Text";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Email, LocationOnSharp, Phone } from "@mui/icons-material";
import Image from "../../Image";
import { useState } from "react";


const addresses = [
  {
    
    name: "Year",
    detail: "2024",
    link: "",
  },
  {  name: "Client", detail: "Emmy", link: "" },
  {  name: "Service", detail: "Studio Session", link: "" },
  {  name: "project", detail: "Creatice", link: "" },
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
      <Header />
      <Grid
        container
        spacing={5}
        sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
        ref={ref}
      >
        <Address />
        <About />
        <ProjectImages />
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
      {addresses.map(({ name, detail, link }, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          mb={3}
        >
          <Box>
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
            fs={{ md: "24px", xs: "18px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
          >
            Job Description
          </Text>
          <Text
            fs={{ md: "14px", xs: "14px" }}
            fw="500"
            color="gray"
            sx={{ mb: 3 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            veritatis saepe beatae vitae iure illum obcaecati at ut expedita
            voluptates sit. Commodi, labore architecto? Natus atque earum odit
            quasi error!
          </Text>
          <Text
            fs={{ md: "14px", xs: "14px" }}
            fw="500"
            color="gray"
            sx={{ mb: 3 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            veritatis saepe beatae vitae iure illum obcaecati at ut expedita
            voluptates sit. Commodi, labore architecto? Natus atque earum odit
            quasi error!
          </Text>
          <Text
            fs={{ md: "14px", xs: "14px" }}
            fw="500"
            color="gray"
            sx={{ mb: 3 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            veritatis saepe beatae vitae iure illum obcaecati at ut expedita
            voluptates sit. Commodi, labore architecto? Natus atque earum odit
            quasi error!
          </Text>
          <Text
            fs={{ md: "14px", xs: "14px" }}
            fw="500"
            color="gray"
            sx={{ mb: 3 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            veritatis saepe beatae vitae iure illum obcaecati at ut expedita
            voluptates sit. Commodi, labore architecto? Natus atque earum odit
            quasi error!
          </Text>
        </Box>
      </Stack>
    </Grid>
  );
}



function Header (){
  return (
    <>
      <ServiceHeader />
      <CardMedia
        component="img"
        height="100%"
        image="/svgs/banner.png"
        alt="wedding"
      />
    </>
  );
}



function ProjectImages() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <Grid container spacing={2}>
        {Array(10)
          .fill()
          .map((item, index) => (
            <Grid size={{ xs: 12, md: 6, sm: 6 }} key={index}>
              <CardMedia
                component="img"
                height="500"
                image="/svgs/banner.png"
                alt="wedding"
                onClick={() => handleClickOpen("/svgs/banner.png")}
                sx={{ cursor: "pointer" }}
              />
            </Grid>
          ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

function ServiceHeader() {
  return (
    <Box sx={{ my: { md: 10, xs: 3 } }}>
      <Text
        fs="40px"
        fw="900"
        ff="Helvetica Neue"
        color="#fff"
        sx={{ textAlign: "center" }}
      >
        Weddings 2024
      </Text>
      <Text
        fs={{ md: "16px", xs: "12px" }}
        fw="400"
        color="#ccc"
        sx={{ mx: { md: 25, xs: 0 }, textAlign: "center" }}
      >
        wedding
      </Text>
    </Box>
  );
}