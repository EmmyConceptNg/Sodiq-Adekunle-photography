import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import Image from "../../../components/Image";
import { Check, Verified } from "@mui/icons-material";
import Button from "../../../components/Button";

export default function ServiceSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.0 },
    });
  }

  return (
    <>
      <Box sx={{ mx: { md: "200px", xs: "20px" }, mt: 5 }} ref={ref}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#121214",
            p: { md: "40px", xs: "0" },
            border: "1px solid rgba(0,0,0,.05)",
            borderRadius: "20px",
            boxShadow:
              "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
            textAlign: "center",
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <ServiceHeader />
          <Service />
        </Grid>
      </Box>
      {/* <PricingSection /> */}
    </>
  );
}

function ServiceHeader() {
  return (
    <>
      <Text fs="40px" fw="900" ff="Helvetica Neue" color="#fff">
        Services
      </Text>
      <Text
        fs={{ md: "16px", xs: "12px" }}
        fw="400"
        color="#ccc"
        sx={{ mx: { md: 25, xs: 0 } }}
      >
        We provide quality service
      </Text>
    </>
  );
}
function PricingHeader() {
  return (
    <>
      <Text fs="40px" fw="900" ff="Helvetica Neue" color="#fff">
        Pricing
      </Text>
      <Text
        fs={{ md: "16px", xs: "12px" }}
        fw="400"
        color="#ccc"
        sx={{ mx: { md: 25, xs: 0 } }}
      >
        Affordable price for a perfect shot
      </Text>
    </>
  );
}

function Service() {
  const services = [
    {
      imageUrl: "svgs/outdoor.png",
      title: "Outdoor Photography",
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
    {
      imageUrl: "svgs/studio.png",
      title: "Studio Session Photography",
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
    {
      imageUrl: "svgs/wedding.png",
      title: "Wedding Photography",
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
  ];
  return (
    <Grid container spacing={3} mt={4}>
      {services.map(({ imageUrl, title, description }, index) => (
        <Grid size={{ md: 4, xs: 12 }} key={index}>
          <Box
            height="160px"
            sx={{
              p: { md: "20px", xs: "10px" },
              border: "1px solid gray",
              "&:hover": { border: "1px solid #2ddb81" },
              borderRadius: "20px",
              boxShadow:
                "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
            }}
          >
            <Box display="flex" justifyContent="flex-start">
              <Image src={imageUrl} sx={{ width: "24%" }} />
            </Box>
            <Text sx={{ textAlign: "left" }} fs="24px" fw="700" color="#fff">
              {title}
            </Text>
            <Text sx={{ textAlign: "left" }} fs="12px" fw="400" color="gray">
              {description}
            </Text>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
function Pricing() {
  const pricing = [
    {
      session: "Basic",
      price: "$300",
      features: ["lorem Ipsum", "lorem Ipsum", "lorem Ipsum", "lorem Ipsum"],
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
    {
      session: "Basic",
      price: "$300",
      features: ["lorem Ipsum", "lorem Ipsum", "lorem Ipsum", "lorem Ipsum"],
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
    {
      session: "Basic",
      price: "$300",
      features: ["lorem Ipsum", "lorem Ipsum", "lorem Ipsum", "lorem Ipsum"],
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
    {
      session: "Basic",
      price: "$300",
      features: ["lorem Ipsum", "lorem Ipsum", "lorem Ipsum", "lorem Ipsum"],
      description:
        "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eius maxim",
    },
  ];
  return (
    <Grid container spacing={3} mt={4}>
      {pricing.map(({ session, price, description, features }, index) => (
        <Grid size={{ md: 3, xs: 12 }} key={index}>
          <Box
            sx={{
              p: { md: "20px", xs: "10px" },
              border: "1px solid gray",
              "&:hover": { border: "1px solid #2ddb81" },
              borderRadius: "20px",
              boxShadow:
                "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
            }}
          >
            <Text sx={{ textAlign: "left" }} fs="18px" fw="400" color="#fff">
              {session}
            </Text>
            <Text sx={{ textAlign: "left" }} fs="24px" fw="700" color="#fff">
              {price}
            </Text>
            <Text sx={{ textAlign: "left" }} fs="12px" fw="400" color="gray">
              {description}
            </Text>
            {features.map((feature, index) => (
              <Box key={index} display="flex" alignItems="center" gap={2}>
                <Verified fontSize="" sx={{ color: "#2ddb81" }} />
                <Text
                  sx={{ textAlign: "left" }}
                  fs="14px"
                  fw="400"
                  color="gray"
                >
                  {feature}
                </Text>
              </Box>
            ))}
            <Box display="flex" justifyContent="flex-start" mt={3}>
              <Button height="40px" variant="contained">
                Book Now
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

function PricingSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.0 },
    });
  }
  return (
    <Box sx={{ mx: { md: "200px", xs: "20px" }, mt: 5 }} ref={ref}>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "#121214",
          p: { md: "40px", xs: "0" },
          border: "1px solid rgba(0,0,0,.05)",
          borderRadius: "20px",
          boxShadow:
            "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          textAlign: "center",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <PricingHeader />
        <Pricing />
      </Grid>
    </Box>
  );
}
