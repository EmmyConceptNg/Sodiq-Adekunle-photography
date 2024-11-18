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
import { notify } from "../../../utils/Index";
import { ToastContainer } from "react-toastify";
import axios, { getImageUrl } from "../../../api/axios";
import { useState } from "react";





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
        <Address admin={admin} />
        <About />
      </Grid>
    </>
  );
}

function Address({admin}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

   const addresses = [
     {
       icon: <LocationOnSharp sx={{ color: "#2ddb81" }} />,
       name: "Our Office",
       detail: admin?.address,
       link: "",
     },
     {
       icon: <Phone sx={{ color: "#2ddb81" }} />,
       name: "Contact Number",
       detail: admin?.phone,
       link: "",
     },
     {
       icon: <Email sx={{ color: "#2ddb81" }} />,
       name: "Email Us",
       detail: admin?.email,
       link: "",
     },
   ];

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
const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async () => {
    setLoading(true);
    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      notify("Please fill all fields", "error");
      return;
    }
    
      axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(()=>{
          setFormData({ fullName: "", email: "", message: "" });
          notify("Message sent successfully!", "success");
      }).catch((error) => {
      console.error("Error sending message:", error);
      notify("An error occurred. Please try again later.", "error");
    }).finally(()=>{
      setLoading(false);
    })

      
   
  };

  return (
    <>
      <ToastContainer />
      <Grid container spacing={3}>
        <Grid size={{ md: 6, xs: 12 }}>
          <TextField
            fullWidth
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
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
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
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
            name="message"
            multiline
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </Grid>
        <Button loading={loading} onClick={handleSubmitForm} variant="contained" height="40px">
          {!loading && "Send Message"}
        </Button>
      </Grid>
    </>
  );
}



  