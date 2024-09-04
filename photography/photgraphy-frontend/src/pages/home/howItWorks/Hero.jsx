import { Box, Grid } from "@mui/material";

import { ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Text from "../../../components/Text";
import Button from "../../../components/Button";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        display={{ md: "flex", lg: "flex", sm: "none", xs: "none" }}
        justifyContent="center"
      ></Box>
      <Grid
        pl={{ md: "100px", lg: "100px", sm: "14px", xs: "14px" }}
        pr={{ md: "0", lg: "0", xs: "14px" }}
        container
        spacing={{ md: 1, lg: 1, sm: 0, xs: 0 }}
        justifyContent="space-between" alignItems="center"
        sx={{ mt: 3 }}
      >
        <Grid item xs={12} md={6} lg={7} sx={{ display: "flex", pt: 5 }}>
          <Box
            sx={{
              my: "auto",
              background: {
                xs: "url('svgs/bg-sm.svg') right bottom no-repeat", // Background image for mobile
                md: "none", // No background image for larger screens
              },
              backgroundSize: {
                xs: "contain", // Background size for mobile
                md: "none", // No background size for larger screens
              },
            }}
            width="100%"
            height={{ xs: "75vh", md: "100%" }}
          >
            <Text
              color="#fff"
              ff="Helvetica Neue"
              fw="700"
              fs={{ md: "46px", xs: "20px" }}
              sx={{
                mb: 3,
                textAlign: { md: "left", xs: "center" },
              }}
            >
              Your Guide Through the Maze of Security{" "}
              <span style={{ color: "#2DDB81" }}>
                Certifications & Compliance
              </span>
            </Text>
            <Text
              color="#fff"
              fw={{ md: "600", xs: "400" }}
              fs={{ md: "16px", xs: "12px" }}
              sx={{
                mb: 3,
                textAlign: { md: "left", xs: "center" },
              }}
            >
              In today's digital world, securing your startup or SMB against
              online threats while securing business opportunities has never
              been more critical. But let's face it, navigating the complex
              labyrinth of security certifications can feel like trying to solve
              a riddle wrapped in a mystery inside an enigma. That's where
              CertRiddle comes in.
            </Text>
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "flex-start", xs: "center" },
              }}
            >
              <Button
                sx={{ mt: { md: 3, xs: 0 } }}
                type="submit"
                height={{ md: "56px", x: "40px" }}
                width={{ md: "226px", xs: "126px" }}
                variant="contained"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} lg={5} sm={12}>
          <Box
            display={{
              md: "flex",
              lg: "flex",
              sm: "none",
              xs: "none",
            }}
            justifyContent="flex-end"
          >
            <Box
              display="flex"
              component="img"
              src="svgs/bg2.svg"
              sx={{
                height: "645px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
