import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../../components/layouts/home/Header";
import Roadmap from "./Roadmap";

import YoutubePlayer from "./YoutubePlayer";
import Newsletter from "./Newsletter";
import Community from "./Community";
import Footer from "../../../components/layouts/Footer";
import PricesCard from "../pricing/PricesCard";
import Pricing from "../pricing/Index";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

import Testimonials from "./Testimonials";
import How from "./How";

export default function HowItWorks() {
  const navigate = useNavigate()
  return (
    <Box>
      <Helmet>
        <title>Prince - Home</title>
      </Helmet>
      <Box>
        <Box width="100%" bgcolor="">
          <Header />
          <Hero />
          <YoutubePlayer />
          <Roadmap />
          <Box
            sx={{ px: { lg: "100px", md: "100px", xs: "10px" } }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <PricesCard free={false} />
            <Button
              type="submit"
              height={{ md: "56px", x: "40px" }}
              width={{ md: "226px", xs: "126px" }}
              variant="contained"
              sx={{
                mt: { md: 3, xs: 0 },
                background: "#111416",
                color: "#fff",
              }}
              onClick={() => navigate("/pricing")}
            >
              Get Started
            </Button>
          </Box>
          <Box
            display={{ md: "block", xs: "none" }}
            sx={{
              position: "absolute",
              width: "400.72px",
              height: "400.46px",
              top: "3000px",
              background: "#C0F497",
              filter: "blur(150px)",
              transform: "rotate(173.52deg)",
              zIndex: "-1",
            }}
          />
          <Box
            display={{ md: "block", xs: "none" }}
            sx={{
              position: "absolute",
              width: "300.14px",
              height: "273.03px",
              left: "400.24px",
              top: "2850.09px",
              background: "#2DDB81",
              filter: "blur(100px)",
              transform: "rotate(-178.32deg)",
              zIndex: "-1",
            }}
          />
          <Box
            sx={{
              px: { lg: "100px", md: "100px", xs: "10px" },
              mt: { md: 5, xs: 2 },
            }}
          >
            <Testimonials />
          </Box>
          <Newsletter />
          <Box
            sx={{
              px: { lg: "100px", md: "100px", xs: "10px" },
              mt: { md: 5, xs: 2 },
            }}
          >
            <How />
          </Box>
          
          <Box
            sx={{
              px: { lg: "100px", md: "100px", xs: "10px" },
              mt: { md: 5, xs: 2 },
            }}
          >
            <Community />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
