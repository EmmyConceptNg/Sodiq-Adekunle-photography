import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tab,
  Tabs,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { OpenInNew } from "@mui/icons-material";
import Text from "../Text";
import { useNavigate } from "react-router-dom";


export default function Projects() {
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
        <Header />
        <Box mt={3}>
          <ProjectTab />
        </Box>
      </Grid>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Text fs="40px" fw="900" ff="Helvetica Neue" color="#fff">
        Projects
      </Text>
      <Text
        fs={{ md: "16px", xs: "12px" }}
        fw="400"
        color="#ccc"
        sx={{ mx: { md: 25, xs: 0 } }}
      >
        Check out some of my design projects, meticulously crafted with love and
        dedication, each one reflecting the passion and soul I poured into every
        detail.
      </Text>
    </>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProjectTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate()

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons="auto"
          variant="scrollable"
          sx={{
            "& .MuiTab-root": {
              color: "gray", // Unselected tab color
            },
            "& .Mui-selected": {
              color: "#2ddb81 !important", // Selected tab color
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#2ddb81", // Indicator color
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Wedding" {...a11yProps(1)} />
          <Tab label="Photo Shoot" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {Array(10)
            .fill()
            .map((item, index) => (
              <Grid size={{ xs: 12, md: 4, sm: 6 }} key={index}>
                <Card
                  sx={{
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    border: "1px solid gray",
                    bgcolor: "transparent",
                    position: "relative", // Added for hover effect
                  }}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        position: "relative",
                        "&:hover .hoverIcon": {
                          opacity: 1,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image="/svgs/banner.png"
                        alt="wedding"
                        sx={{
                          transition: "0.3s",
                          "&:hover": {
                            filter: "brightness(70%)", // Darken the image on hover
                          },
                        }}
                      />
                      <Box
                        className="hoverIcon"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          opacity: 0,
                          transition: "0.3s",
                        }}
                      >
                        <IconButton
                          onClick={()=>navigate("/portfolio/:id")} // Link to your single page
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            "&:hover": {
                              bgcolor: "rgba(0,0,0,0.8)",
                            },
                          }}
                        >
                          <OpenInNew sx={{ color: "#fff" }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardContent>
                      <Text fs="24px" fw="600">
                        Wedding
                      </Text>
                      <Text fs="14px" color="#ccc">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit
                        sed diam non pro
                      </Text>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {Array(2)
            .fill()
            .map((item, index) => (
              <Grid size={{ xs: 12, md: 4, sm:6 }} key={index}>
                <Card
                  sx={{
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    border: "1px solid gray",
                    bgcolor: "transparent",
                    position: "relative",
                  }}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        position: "relative",
                        "&:hover .hoverIcon": {
                          opacity: 1,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image="/svgs/banner.png"
                        alt="wedding"
                        sx={{
                          transition: "0.3s",
                          "&:hover": {
                            filter: "brightness(70%)",
                          },
                        }}
                      />
                      <Box
                        className="hoverIcon"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          opacity: 0,
                          transition: "0.3s",
                        }}
                      >
                        <IconButton
                          onClick={()=>navigate("/portfolio/:id")}
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            "&:hover": {
                              bgcolor: "rgba(0,0,0,0.8)",
                            },
                          }}
                        >
                          <OpenInNew sx={{ color: "#fff" }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardContent>
                      <Text fs="24px" fw="600">
                        Wedding
                      </Text>
                      <Text fs="14px" color="#ccc">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit
                        sed diam non pro
                      </Text>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={2}>
          {Array(4)
            .fill()
            .map((item, index) => (
              <Grid size={{ xs: 12, md: 4, sm:6 }} key={index}>
                <Card
                  sx={{
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    border: "1px solid gray",
                    bgcolor: "transparent",
                    position: "relative", // Added for hover effect
                  }}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        position: "relative",
                        "&:hover .hoverIcon": {
                          opacity: 1,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image="/svgs/banner.png"
                        alt="wedding"
                        sx={{
                          transition: "0.3s",
                          "&:hover": {
                            filter: "brightness(70%)", // Darken the image on hover
                          },
                        }}
                      />
                      <Box
                        className="hoverIcon"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          opacity: 0,
                          transition: "0.3s",
                        }}
                      >
                        <IconButton
                          onClick={()=>navigate("/portfolio/:id")} // Link to your single page
                          sx={{
                            bgcolor: "rgba(0,0,0,0.5)",
                            "&:hover": {
                              bgcolor: "rgba(0,0,0,0.8)",
                            },
                          }}
                        >
                          <OpenInNew sx={{ color: "#fff" }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <CardContent>
                      <Text fs="24px" fw="600">
                        Wedding
                      </Text>
                      <Text fs="14px" color="#ccc">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit
                        sed diam non pro
                      </Text>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
