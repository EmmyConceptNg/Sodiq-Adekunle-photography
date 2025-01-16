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
        <Policy admin={admin} />
      </Grid>
    </>
  );
}



function Policy({admin}) {
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
      size={{ xs: 12, md: 12 }}
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      ref={ref}
      sx={{ height: "100%" }}
    >
      <Stack spacing={5} sx={{ height: "100%" }}>
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
            fs={{ md: "26px", xs: "20px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            BOOKING POLICY:
          </Text>
          <Text
            fs={{ md: "16px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
            A 50% non-refundable retainer deposit is required at the time of
            booking. This retainer deposit reserves your date and time we will
            photograph together. The remaining balance is due at the time of our
            photo session.
          </Text>
          <Text
            fs={{ md: "26px", xs: "20px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            CANCELLATION POLICY:
          </Text>
          <Text
            fs={{ md: "16px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
            For regular sessions, client forfeits their session retainer and the
            paid to book the session date will act as a cancellation fee. The
            fee can be credited towards a future session if the client
            reschedules the appointment by calling 72 hours prior to the date of
            session and re-booking at an agreeable date and time.
          </Text>
          <Text
            fs={{ md: "26px", xs: "20px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            WEDDING
          </Text>
          <Text
            fs={{ md: "16px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
            For all weddings, a 50% non-refundable retainer deposit is required
            after our contract is signed in order to reserve your wedding date.
            The remaining balance is split into two equal portions: the first is
            due two months before the wedding date and the second is due one
            month before the wedding date.
          </Text>
          <Text
            fs={{ md: "26px", xs: "20px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            Special Circumstances
          </Text>
          <Text
            fs={{ md: "16px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
            I get it. Sometimes bad things happen that are out of our control.
            Below are a list of things that may get in the way of our photo
            shoot and how we will handle them together.
          </Text>
          <Text
            fs={{ md: "26px", xs: "20px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            Act Of God
          </Text>
          <Text
            fs={{ md: "16px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
            We both understand and assume the risks and dangers of travel and
            if, in the event that a last-minute horrific event occurs while I'm
            en route to the photo session preventing me from photographing, I
            will refund you all monies paid to date.
          </Text>
          <Text
            fs={{ md: "26px", xs: "20px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            WEDDING
          </Text>
          <Text
            fs={{ md: "16px", xs: "12px" }}
            fw="500"
            color="#ccc"
            sx={{ my: 3 }}
          >
            In order to protect highly expensive electronic equipment, if
            weather factors (ex: rain and/or lightning, etc.) are present during
            any portion of the wedding, I will not be expected or required to
            photograph outdoors or be liable in any capacity for a lower
            quantity of photographs submitted.
          </Text>

          
        </Box>
      </Stack>
    </Grid>
  );
}

