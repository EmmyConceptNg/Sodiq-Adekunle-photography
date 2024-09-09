import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Tab,
  Tabs,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { SubwayFile13 } from "../../../../public/svgs/SubwayFile13";

const experience = [
  {
    icon: <SubwayFile13 />,
    date: "2021 - present",
    title: "Senior Photographer",
    location: "Emmy Studio, Lagos",
  },
  {
    icon: <SubwayFile13 />,
    date: "2021 - present",
    title: "Senior Photographer",
    location: "Emmy Studio, Lagos",
  },
  {
    icon: <SubwayFile13 />,
    date: "2021 - present",
    title: "Senior Photographer",
    location: "Emmy Studio, Lagos",
  },
];

export default function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2.0 },
    });
  }

  return (
    <Box sx={{ mx: { md: "200px", xs: "20px" }, mt: 5 }} ref={ref}>
      <Grid
        container
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        spacing={5}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            bgcolor: "#121214",
            p: { md: "40px", xs: "10px" },
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
            sx={{ mb: 3 }}
          >
            Experience
          </Text>

          {experience.map((item, index) => (
            <>
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap={2}
              >
                <Box>{item.icon}</Box>
                <Box>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {item.date}
                  </Text>
                  <Text fs={{ md: "24px", xs: "18px" }} fw="500" color="#fff">
                    {item.title}
                  </Text>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {item.location}
                  </Text>
                </Box>
              </Box>
              {index != experience.length - 1 && (
                <Divider sx={{ bgcolor: "gray", my: 3 }} />
              )}
            </>
          ))}
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            bgcolor: "#121214",
            p: { md: "40px", xs: "10px" },
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
            sx={{ mb: 3 }}
          >
            Education
          </Text>

          {experience.map((item, index) => (
            <>
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap={2}
              >
                <Box>{item.icon}</Box>
                <Box>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {item.date}
                  </Text>
                  <Text fs={{ md: "24px", xs: "18px" }} fw="500" color="#fff">
                    {item.title}
                  </Text>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {item.location}
                  </Text>
                </Box>
              </Box>
              {index != experience.length - 1 && (
                <Divider sx={{ bgcolor: "gray", my: 3 }} />
              )}
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
