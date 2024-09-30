import {
  Box,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { SubwayFile13 } from "../../../../public/svgs/SubwayFile13";
import axios from '../../../api/axios'
import moment from "moment";

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
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2.0 },
    });
  }


  useEffect(() => {
    axios
      .get("/api/experiences", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setExperiences(response.data.experiences);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/api/educations", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setEducations(response.data.educations);
      });
  }, []);

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

          {experiences.map((item, index) => (
            <>
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap={2}
              >
                <Box>
                  <SubwayFile13 />
                </Box>
                <Box>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {`${moment(item.startDate).format(
                      "MMM Do YYYY"
                    )} - ${moment(item.endDate).format("MMM Do YYYY")}`}
                  </Text>
                  <Text fs={{ md: "24px", xs: "18px" }} fw="500" color="#fff">
                    {item.name}
                  </Text>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {item.location}
                  </Text>
                </Box>
              </Box>
              {index != experiences.length - 1 && (
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

          {educations.map((item, index) => (
            <>
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap={2}
              >
                <Box>
                  <SubwayFile13 />
                </Box>
                <Box>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {`${moment(item.startDate).format(
                      "MMM Do YYYY"
                    )} - ${moment(item.endDate).format("MMM Do YYYY")}`}
                  </Text>
                  <Text fs={{ md: "24px", xs: "18px" }} fw="500" color="#fff">
                    {item.course}
                  </Text>
                  <Text fs={{ md: "18px", xs: "12px" }} fw="500" color="gray">
                    {item.name}
                  </Text>
                </Box>
              </Box>
              {index != educations.length - 1 && (
                <Divider sx={{ bgcolor: "gray", my: 3 }} />
              )}
            </>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
