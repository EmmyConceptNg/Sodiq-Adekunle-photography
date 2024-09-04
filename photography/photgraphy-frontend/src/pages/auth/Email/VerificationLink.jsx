import { Box, Stack } from "@mui/material";

import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import axios from '../../../api/axios';
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Footer from "../../../components/layouts/Footer";
import { useSelector } from "react-redux";

export default function VerificationLink() {
  const [sendMailBtn, setSendMailBtn] = useState(false);
    const user = useSelector((state) => state.user.details);

  
  const handleResendMail = () => {
    setSendMailBtn(true);

    axios.get(`/api/auth/email/resend/${user.email}`).then(() => {
      setSendMailBtn(false);
    });
  };

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
              Check your email
            </Text>
            <Text fw="400" fs="16px" color="#fff" sx={{ textAlign: "center" }}>
              We sent averification link to {user.email}
            </Text>
            <Button
              to="/verification/email"
              width="100%"
              heigh="44px"
              type="submit"
              variant="contained"
            >
              Enter code manually
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
              {!sendMailBtn ? (
                <Text
                  background="linear-gradient(180deg, #2DDB81 0%, #2DDB81 100%)"
                  fs="14px"
                  fw="700"
                  onClick={() => {
                    handleResendMail();
                  }}
                  sx={{
                    color: "#2DDB81",
                    textAlign: "center",
                    marginLeft: 1,
                    cursor: "pointer",
                  }}
                >
                  Click to resend
                </Text>
              ) : (
                <Text
                  background="linear-gradient(180deg, #2DDB81 0%, #2DDB81 100%)"
                  fs="14px"
                  fw="700"
                  sx={{
                    textAlign: "center",
                    marginLeft: 1,
                    color: "#FF9D43",
                    cursor: "pointer",
                  }}
                >
                  Resending... Please wait
                </Text>
              )}
            </Box>
            <Button
              color="#fff"
              width="100%"
              heigh="44px"
              type="button"
              startIcon={<ArrowBack />}
              to="/signup"
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
