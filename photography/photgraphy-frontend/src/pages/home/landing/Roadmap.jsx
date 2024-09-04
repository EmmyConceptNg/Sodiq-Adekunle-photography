import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Lead from "./Lead";

export default function Roadmap() {
  return (
    <Box
      sx={{
        background: {
          md: "url('/svgs/Roadmap-Bg.png') #000 top center / cover no-repeat",
          xs: "url('/svgs/Roadmap-Bg.png') #000 bottom center / cover no-repeat",
        },
        heigth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { md: 30, xs: 0 },
        px: 2,
      }}
    >
      <Box mx={{ md: "200px", xs: 2 }}>
        <Text
          color="#fff"
          ff="Helvetica Neue"
          fw="700"
          fs={{ md: "32px", lg: "32px", sm: "30px", xs: "20px" }}
          sx={{
            textAlign: {
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            },
          }}
        >
          Welcome to CertRiddle!
          <p style={{ marginTop: "0px" }}>
            Making{" "}
            <span style={{ color: "#2DDB81" }}>
              Security Certifications & Compliance{" "}
            </span>
            Less of a Puzzle!
          </p>
          <Box disply="flex" pr={{ xs: 0, md: "300px", lg: '"550px"' }}>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                fontFamily: "Inter",
              }}
            >
              In today's digital world, securing your startup or SMB against
              online threats while securing business opportunities has never
              been more critical. But let's face it, navigating the complex
              labyrinth of security certifications can feel like trying to solve
              a riddle wrapped in a mystery inside an enigma. That's where
              CertRiddle comes in.
            </p>
          </Box>
        </Text>

        <Text
          color="#fff"
          ff="Helvetica Neue"
          fw="700"
          fs={{ md: "32px", lg: "32px", sm: "30px", xs: "20px" }}
          sx={{
            mt: 20,
            textAlign: {
              lg: "center",
              md: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          The <span style={{ color: "#2DDB81" }}>Roadmap</span>
        </Text>
      </Box>
      <Lead />
    </Box>
  );
}
