import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Button from "../../../components/Button";

export default function Community() {
  return (
    <Box
      bgcolor="#051B0F4F"
      borderRadius="16px"
      height={{ md: "362px", xs: "450px" }}
      border="1px solid #10281B"
      width="100%"
      display="flex"
      alignSelf="center"
      sx={{
        background: `
      url('/svgs/TheBg1.svg') top left no-repeat,
      url('/svgs/TheBg2.svg') bottom right no-repeat,
      #051B0F4F
    `,
      }}
    >
      <Stack
        width="100%"
        sx={{ flexGrow: 1 }}
        spacing={2}
        bgcolor="#051B0F4F"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={{ md: 20, xs: 0 }}
      >
        <Text
          color="#2DDB81"
          fw="700"
          fs="14px"
          sx={{
            textAlign: "center",
          }}
        >
          Let's Solve the Puzzle Together!
        </Text>
        <Text
          color="#fff"
          ff="Helvetica Neue"
          fw="700"
          fs="36px"
          sx={{
            mb: 3,
            textAlign: "center",
          }}
        >
          Join the CertRiddle Community
        </Text>
        <Text
          color="#fff"
          fw="400"
          fs="16px"
          sx={{
            textAlign: "center",
          }}
        >
          Ready to demystify the world of security certifications & compliance?
          Join CertRiddle today and start your journey toward security success.
          With CertRiddle, you're not just getting certified; you're securing
          the future of your business growth with confidence.
        </Text>

        <Button type="button" height="48px" width="200px" variant="contained">
          <span style={{ color: "#fff" }}>Join Community</span>
        </Button>
      </Stack>
    </Box>
  );
}