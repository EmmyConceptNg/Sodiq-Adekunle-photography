import { Box, CardMedia, Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import axios, { getImageUrl } from "../../../api/axios";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveSlide = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
    <>
      <Grid
        container
        spacing={5}
        sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
        ref={ref}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        {loadPage ? (
          <>
            <Grid size={{ md: 4, xs: 12 }}>
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "#121214" }}
                width="100%"
                height={500}
              />
            </Grid>
            <Grid size={{ md: 8, xs: 12 }}>
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "#121214" }}
                width="100%"
                height={500}
              />
            </Grid>
          </>
        ) : (
          <>
            <PersonalInfo admin={admin} />
            <Slide />
          </>
        )}
      </Grid>
      {/* <Companies /> */}
    </>
  );
}

function PersonalInfo({ admin }) {
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
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#121214",
        p: { md: "40px", xs: "20px" },
        border: "1px solid rgba(0,0,0,.05)",
        borderRadius: "20px",
        boxShadow:
          "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
        textAlign: "center", display: {xs : 'none', md : 'flex'}
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      ref={ref} 
    >
      <Image
        src={admin?.image ? admin?.image : "/icons/profile.png"}
        alt={admin?.firstName}
        sx={{ borderRadius: "20px" }}
      />
      <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
        {admin?.firstName && admin?.firstName + " " + admin?.lastName}
      </Text>
      <Text fs="16px" fw="400" color="#ccc">
        I am a professional photographer.
      </Text>
      <Socials admin={admin} />
    </Grid>
  );
}

function Slide() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    axios
      .get("/api/portfolios", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        const portfolios = response.data.portfolios;

        // Extract a random image from each portfolio and merge them
        const randomImages = portfolios
          .map((portfolio) => {
            const images = portfolio.images; // Assuming images is an array
            if (images.length > 0) {
              const randomIndex = Math.floor(Math.random() * images.length);
              return images[randomIndex]; // Pick a random image
            }
            return null; // Handle empty image arrays
          })
          .filter((image) => image !== null); // Remove null values

        // Now merge these random images with any additional images if needed
        setDisplayImages(randomImages);
      })
      .catch((error) => {
        console.error("Error fetching portfolios:", error);
      });
  }, []);

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
            p: { md: "0", xs: "0" },
            border: "1px solid rgba(0,0,0,.05)",
            borderRadius: "20px",
            boxShadow:
              "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          }}
        >
          <Carousel
            responsive={responsiveSlide}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={true}
          >
            {displayImages?.map((item, index) => (
              <CardMedia
                key={index}
                component="img"
                height="650"
                image={item}
                alt="Adekule Sodiq Photography"
                sx={{
                  border: "1px solid rgba(0,0,0,.05)",
                  borderRadius: "20px",
                  boxShadow:
                    "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
                }}
              />
            ))}
          </Carousel>
        </Box>
      </Stack>
    </Grid>
  );
}
function Companies() {
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
      sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
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
          <Box display="flex" justifyContent="center">
            <Text fs="16px" fw="400" color="#ccc">
              Companies I've worked with
            </Text>
          </Box>
          <Box mt={3}>
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
            >
              {Array(10)
                .fill()
                .map((item, index) => (
                  <Image
                    src="/brands/logo.png"
                    sx={{ height: "100px" }}
                    key={index}
                  />
                ))}
            </Carousel>
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
}

function Socials({ admin }) {
  return (
    <Stack
      mt={3}
      justifyContent={{ md: "center", xs: "center" }}
      spacing={{ md: 5, xs: 2 }}
      direction="row"
      alignItems={{ md: "center", xs: "center" }}
    >
      {[
        {
          image: "/svgs/LinkedIn.svg",
          name: "linkedIn",
        },
        {
          image: "/svgs/Facebook.svg",
          name: "facebook",
        },
        {
          image: "/svgs/Twitter.svg",
          name: "twitter",
        },
        {
          image: "/svgs/Instagram-Sm.svg",
          name: "instagram",
        },
      ].map((nav, index) =>
        admin[nav.name] ? (
          <a
            href={admin[nav.name]} // Use admin's actual URL
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // For security
            key={index}
            style={{
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src={nav?.image}
                width="20px"
                alt={nav.name}
              />
            </Box>
          </a>
        ) : null
      )}
    </Stack>
  );
}
