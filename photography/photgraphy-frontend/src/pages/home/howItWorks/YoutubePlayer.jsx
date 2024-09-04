import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";

export default function YoutubePlayer() {
  return (
    <Box
      sx={{
        background: {
          md: "url('/svgs/Roadmap-Bg.png') #000 top center / cover no-repeat",
          xs: "url('/svgs/Roadmap-Bg.png') #000 bottom center / cover no-repeat",
        },
        marginTop:'-250px',
        marginBottom:'80px',
        heigth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: 50,
      }}
    >
      <Stack
        spacing={5}
        sx={{
          px: { lg: "100px", md: "100px", xs: "10px" },
          mt: { md: 10, xs: 4 },
        }}
      >
        <Box>
          <Text
            color="#fff"
            ff="Helvetica Neue"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 0,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Welcome to CertRiddle! Making
          </Text>
          <Text
            color="#fff"
            ff="Helvetica Neue"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            <span style={{ color: "#2DDB81" }}>
              Security Certifications & Compliance
            </span>{" "}
            Less of a Puzzle!
          </Text>
          <Text
            color="#fff"
            fw="500"
            fs={{ md: "18px", xs: "15px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            In today's digital world, securing your startup or SMB against
            online threats while securing business opportunities has never been
            more critical. But let's face it, navigating the complex labyrinth
            of security certifications can feel like trying to solve a riddle
            wrapped in a mystery inside an enigma. That's where CertRiddle comes
            in.
          </Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box component="img" src="/svgs/Player.svg" width="100%" />
        </Box>
        <Box>
          <Text
            color="#fff"
            ff="Helvetica Neue"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 0,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Simplifying Your Journey to
          </Text>
          <Text
            color="#2DDB81"
            ff="Helvetica Neue"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Security Success
          </Text>
          <Text
            color="#fff"
            fw="500"
            fs={{ md: "18px", xs: "15px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            CertRiddle is designed with one goal in mind: to simplify the
            complex security certification journey for SMBs and startups. We
            understand the hurdles of deciphering which certifications are vital
            for your business, the daunting task of meeting countless compliance
            requirements, and the sheer amount of time and resources needed to
            get certified. That's why we've created a solution to make this
            journey as straightforward and hassle-free as possible.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}