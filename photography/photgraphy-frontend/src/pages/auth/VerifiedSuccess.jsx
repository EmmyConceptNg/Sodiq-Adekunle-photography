import { Box, Stack } from "@mui/material";

import Button from "../../components/Button";
import { ArrowBack } from "@mui/icons-material";
import Text from "../../components/Text";
import Footer from "../../components/layouts/Footer";


export default function VerifiedSuccess() {
  return (
    <>
      <Box display="flex" justifyContent="center" component="form" mt={10}>
        <Box sx={{ mx: "auto" }} width={{ xs: "343px", sm: "360px" }}>
          <Box display="flex" justifyContent="center" mb="100px">
            <Box component="img" src="/svgs/Logo.svg" width="242px" />
          </Box>
          <Stack spacing={3} justifyContent="center" alignItems="center">
            <Box component="img" src="/svgs/Mail.svg" width="56px" />
            <Text fw="600" fs="30px" color="#fff">
              Email verified
            </Text>
            <Text fw="400" fs="16px" color="#fff" sx={{ textAlign: "center" }}>
              Your password has been successfully reset. Click below to log in
              magically.
            </Text>
            <Button
              to="/dashboard"
              width="100%"
              heigh="44px"
              type="button"
              variant="contained"
            >
              Continue
            </Button>
            <Box display="flex">
              <Text
                sx={{ textAlign: "center" }}
                color="#fff"
                fs="14px"
                fw="400"
              >
                Didn’t receive the email?
              </Text>
              <Text
                background="linear-gradient(180deg, #2DDB81 0%, #2DDB81 100%)"
                fs="14px"
                fw="700"
                onClick={() => {}}
                sx={{
                  textAlign: "center",
                  marginLeft: 1,
                  color: "#FF9D43",
                  cursor: "pointer",
                }}
              >
                Click to resend
              </Text>
            </Box>
            <Button
              color="#fff"
              width="100%"
              heigh="44px"
              type="button"
              to="/login"
              startIcon={<ArrowBack />}
            >
              Back to log in
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ mx: { lg: "100px", xs: 0 }, mt: 12 }}>
        <Footer logo={false} />
      </Box>
    </>
  );
}
