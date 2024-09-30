import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import Image from "../../../../components/Image";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios, { getImageUrl } from "../../../../api/axios";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

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

  const [portfolio, setPortfolio] = useState({});
  const [tableLoad, setTableLoad] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/portfolios/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPortfolio(response.data.portfolio);
        setTableLoad(false);
      });
  }, [id]);

  return (
    <>
      <Header portfolio={portfolio} />
      <Grid
        container
        spacing={5}
        sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
        ref={ref}
      >
        <Address portfolio={portfolio} />
        <About portfolio={portfolio} />
        <ProjectImages portfolio={portfolio} />
      </Grid>
    </>
  );
}

function Address({ portfolio }) {
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
      <Stack alignItems="flex-start" spacing={2} mb={3}>
        <Box>
          <Text
            sx={{ textAlign: "left", my: 0 }}
            fs="14px"
            fw="500"
            color="gray"
          >
            Name
          </Text>
          <Text
            sx={{ textAlign: "left", my: 0 }}
            fs="18px"
            fw="600"
            color="#fff"
          >
            {portfolio?.name}
          </Text>
        </Box>
        <Box>
          <Text
            sx={{ textAlign: "left", my: 0 }}
            fs="14px"
            fw="500"
            color="gray"
          >
            Date
          </Text>
          <Text
            sx={{ textAlign: "left", my: 0 }}
            fs="18px"
            fw="600"
            color="#fff"
          >
            {moment(portfolio?.date).format("MMMM Do YYYY")}
          </Text>
        </Box>
      </Stack>
    </Grid>
  );
}

function About({ portfolio }) {
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
            Portfolio Description
          </Text>
          <Text
            fs={{ md: "14px", xs: "14px" }}
            fw="500"
            color="gray"
            sx={{ mb: 3 }}
          >
            {portfolio?.description}
          </Text>
        </Box>
      </Stack>
    </Grid>
  );
}

function Header({ portfolio }) {
  const [randomImage, setRandomImage] = useState("");
  useEffect(() => {
    if (portfolio?.images?.length > 0) {
      setRandomImage(
        portfolio?.images[Math.floor(Math.random() * portfolio?.images?.length)]
      );
    }
  }, [portfolio?.images]);

  return (
    <>
      <ServiceHeader portfolio={portfolio} />
      <CardMedia
        component="img"
        height="100%"
        image={getImageUrl(randomImage)}
        alt={portfolio?.name}
      />
    </>
  );
}

function ProjectImages({ portfolio }) {
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
        {portfolio?.images?.map((item, index) => (
          <Grid size={{ xs: 12, md: 6, sm: 6 }} key={index}>
            <CardMedia
              component="img"
              height="500"
              image={getImageUrl(item)}
              alt="wedding"
              onClick={() => handleClickOpen(getImageUrl(item))}
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

function ServiceHeader({ portfolio }) {
  return (
    <Box sx={{ my: { md: 10, xs: 3 } }}>
      <Text
        fs="40px"
        fw="900"
        ff="Helvetica Neue"
        color="#fff"
        sx={{ textAlign: "center" }}
      >
        {portfolio?.name}
      </Text>
    </Box>
  );
}
