import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import { Link } from "react-scroll";
import Image from "../../../components/Image";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TypewriterEffect from "../../../utils/Writer";

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

export default function Hero() {
  return (
    <Grid container spacing={5} sx={{ mx: { md: "200px", xs: "20px" }, mt: 5 }}>
      <PersonalInfo />
      <About />
    </Grid>
  );
}

function PersonalInfo() {
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
    >
      <Image src="/images/profile.png" alt="profile" />
      <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
        Emmanuel Kolawole
      </Text>
      <Text fs="16px" fw="400" color="#ccc">
        I am a professional photographer.
      </Text>
      <Socials />
    </Grid>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <Grid size={{ xs: 12, md: 8 }}>
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
          <Text fs="16px" fw="400" color="#ccc">
            Hello There!
          </Text>

          <Text
            fs={{ md: "32px", xs: "24px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            {/* <TypewriterEffect
              text="I am Emmanuel Kolawole, a product designer crafting user-centric design with pixel-perfect precision."
              speed={100}
            /> */}
            I am Emmanuel Kolawole, a product designer crafting user-centric
            design with pixel-perfect precision.
          </Text>

          <Text fs="16px" fw="400" color="#2ddb81">
            Available for Booking
          </Text>

          <Button
            sx={{ mt: 3 }}
            onClick={() => navigate("/contact")}
            height="40px"
            width="250px"
            variant="contained"
            color="#2DDB81"
          >
            Download CV
          </Button>
        </Box>
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
          <Text fs="16px" fw="400" color="#ccc">
            Companies I've worked with
          </Text>
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
                .map((item) => (
                  <Image
                    src="/brands/logo.png"
                    sx={{ height: "100px" }}
                    key={item}
                  />
                ))}
            </Carousel>
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
}

function Socials() {
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
          to: "https://www.linkedin.com/company/certriddle/?viewAsMember=true",
          image: "/svgs/LinkedIn.svg",
        },
        {
          to: "https://www.facebook.com/profile.php?id=61559952553785",
          image: "/svgs/Facebook.svg",
        },
        {
          to: "https://x.com/CertRiddle",
          image: "/svgs/Twitter.svg",
        },
      ].map((nav, index) => (
        <Link
          style={{
            color: "#fff",
            cursor: "pointer",
          }}
          to={nav?.to}
          smooth={true}
          duration={500}
          key={index}
        >
          <Box display="flex">
            {nav?.name && nav?.name}
            {nav?.image && (
              <Box component="img" src={nav?.image} width="20px" />
            )}
          </Box>
        </Link>
      ))}
    </Stack>
  );
}
