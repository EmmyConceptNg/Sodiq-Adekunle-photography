import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid2, IconButton, Stack, Tab, Tabs } from "@mui/material";
import Text from "../../../components/Text";
import { OpenInNew } from "@mui/icons-material";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import AddPortfolioModal from "../../../components/modals/portfolio/AddPortfolioModal";

export default function Portfolio(props) {
  const [services, setServices] = useState([])
  return (
    <Stack spacing={3}>
      <Header services={services} setServices={setServices} />
      <ProjectTab services={services} setServices={setServices} />
    </Stack>
  );
}

function Header({services, setServices}) {

  const [addPortfolio, setAddPortfolio] = useState(false)

  return (
    <>
    <AddPortfolioModal open={addPortfolio} setOpen={setAddPortfolio} services={services} setServices={setServices} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
            Portfolio
          </Text>
          <Text fs="16px" fw="400" color="gray">
            Manage portfolio
          </Text>
        </Box>
        <Button variant="contained" height="45px" onClick={() => setAddPortfolio(true)}>
          Add Portfolio
        </Button>
      </Stack>
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


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
        <Grid2 container spacing={2}>
          {Array(10)
            .fill()
            .map((item, index) => (
              <Grid2 size={{ xs: 12, md: 4, sm: 6 }} key={index}>
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
                          onClick={()=>navigate("/admin/portfolio/:id")} // Link to your single page
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
              </Grid2>
            ))}
        </Grid2>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid2 container spacing={2}>
          {Array(2)
            .fill()
            .map((item, index) => (
              <Grid2 size={{ xs: 12, md: 4, sm: 6 }} key={index}>
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
                          onClick={()=>navigate("/admin/portfolio/:id")}
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
              </Grid2>
            ))}
        </Grid2>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid2 container spacing={2}>
          {Array(4)
            .fill()
            .map((item, index) => (
              <Grid2 size={{ xs: 12, md: 4, sm: 6 }} key={index}>
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
                          onClick={()=>navigate("/admin/portfolio/:id")} // Link to your single page
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
              </Grid2>
            ))}
        </Grid2>
      </CustomTabPanel>
    </Box>
  );
}

Portfolio.propTypes = {};
Header.propTypes ={
  services: PropTypes.array,
  setServices: PropTypes.func
}