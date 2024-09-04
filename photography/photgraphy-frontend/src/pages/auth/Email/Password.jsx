import { Box, Checkbox, Grid, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { useEffect, useState } from "react";





import { Form, Formik } from "formik";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { passwordEmailValidation } from "../../../utils/Index";
import { ArrowBack } from "@mui/icons-material";
import Footer from "../../../components/layouts/Footer";


export default function Password() {
  
  const initialValues = {
    email: "",
  };

  const navigate = useNavigate();

  const handlePasswordEmail = (values, actions) => {
    actions.setSubmitting(true);

    navigate("/reset-password/:email/success");
  };

  return (
    <Box height="100vh" ml={{ lg: 20, xs: 0 }}>
      <ToastContainer />
      <Grid container spacing={1} justifyContent="space-between">
        <Grid item md={12} lg={7} xs={12} sm={12}>
          <Stack
            justifyContent="space-between"
            alignItems="space-between"
            sx={{ minHeight: "100vh" }} // Ensure full viewport height
            pl={{ lg: 10 }}
          >
            <Box mt={5}>
              <Box
                mb={5}
                display="flex"
                justifyContent={{ lg: "flex-start", xs: "center" }}
              >
                <Box component="img" src="/svgs/Logo.svg" width="242px" />
              </Box>
              <Stack
                my="auto"
                mr={{ lg: "auto", xs: 0 }}
                mx={{ lg: 0, xs: "auto" }}
                spacing={2}
                sx={{ width: { lg: "520px", sm: "450px", xs: "320px" } }}
              >
                <Box component="img" src="/svgs/Lock.svg" width="56px" />
                <Text
                  color="#fff"
                  ff="Helvetica Neue"
                  fw="700"
                  fs={{ md: "36", lg: "36", sm: "30px", xs: "20px" }}
                >
                  Forgot Password
                </Text>
                <Text fw="400" fs="16px" color="#fff">
                  No worries, we’ll send you reset instructions.
                </Text>
                <Formik
                  initialValues={initialValues}
                  validationSchema={passwordEmailValidation}
                  onSubmit={handlePasswordEmail}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Stack
                        spacing={5}
                        mt={2}
                        sx={{ width: { lg: "520px", sm: "450px" } }}
                      >
                        <Input
                          label="Email"
                          required
                          placeholder="Enter you email"
                          aria-label="enter your email"
                          name="email"
                          sx={{ bgcolor: "transparent" }}
                        />

                        <Button
                          loading={isSubmitting}
                          width="100%"
                          height="44px"
                          type="submit"
                          variant="contained"
                        >
                          Reset Password
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
                <Box
                  display="flex"
                  justifyContent={"flex-start"}
                  alignItems="center"
                >
                  <Button
                    color="#fff"
                    width="10 %"
                    heigh="44px"
                    type="button"
                    startIcon={<ArrowBack />}
                    to="/login"
                  >
                    Back to log in
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box sx={{ alignSelf: "flex-end", width: "100%" }}>
              <Footer logo={false} />
            </Box>
          </Stack>
        </Grid>
        <Grid item md={12} lg={5} xs={12} sm={12}>
          <Box
            sx={{
              height: { lg: "100vh", xs: "100%" },
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/svgs/Auth-Img.svg"
              alt="Authentication"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: { lg: "100vh", xs: "100%" },
                width: "100%",
                objectFit: "cover",
                display: { md: "block", sm: "none", xs: "none" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
