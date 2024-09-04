import { Box, Checkbox, Grid, Stack } from "@mui/material";
// import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { notify, userValidation } from "../../utils/Index";
import { Formik, Form } from "formik";
import axios from "../../api/axios";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/layouts/Footer";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/UserReducer";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const handleSignup = (values, actions) => {
    actions.setSubmitting(true);

    axios
      .post("/api/auth/register", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data.user);
        dispatch(setUser(response.data.user));
        navigate("/verification/link/email");
        // navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        notify(error?.response?.data?.error, "error");
      })
      .finally(() => actions.setSubmitting(false));
  };

  const [googelUser, setGoogleUser] = useState([]);

  const signUpWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (googelUser && googelUser.access_token) {
      // Ensure there's an access token
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googelUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googelUser.access_token}`,
            },
          }
        )
        .then((res) => {
          const actions = {
            setSubmitting: (isSubmitting) => {
              /* handle submission state */
            },
          };
          handleSignup(
            {
              fullName: res.data.name,
              email: res.data.email,
              image: res.data.picture,
              emailVerified: res.data.verified_email,
            },
            actions
          );
        })
        .catch((err) => {
          console.error("Error fetching Google user info:", err.message);
        });
    }
  }, [googelUser]);

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
                <Text
                  color="#fff"
                  ff="Helvetica Neue"
                  fw="700"
                  fs={{ md: "36", lg: "36", sm: "30px", xs: "20px" }}
                >
                  Sign Up
                </Text>
                <Text fw="400" fs="16px" color="#fff">
                  Welcome back! Please enter your details.
                </Text>
                <Formik
                  initialValues={initialValues}
                  validationSchema={userValidation}
                  onSubmit={handleSignup}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Stack
                        spacing={7}
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
                        <Input
                          label="Name"
                          required
                          placeholder="Enter you name"
                          aria-label="enter your name"
                          name="fullName"
                          sx={{ bgcolor: "transparent" }}
                        />
                        <Input
                          label="Password"
                          type="password"
                          endAdornment
                          required
                          placeholder="Enter you password"
                          aria-label="enter your password"
                          name="password"
                          sx={{ bgcolor: "transparent" }}
                        />

                        <Button
                          loading={isSubmitting}
                          width="100%"
                          height="44px"
                          type="submit"
                          variant="contained"
                        >
                          Sign Up
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
                <Stack direction="row" alignItems="center">
                  <Checkbox
                    sx={{
                      color: "#10281B",
                      "&.Mui-checked": {
                        color: "#2DDB81",
                      },
                    }}
                  />
                  <Text fs="14px" fw="500" color="#fff" mb={2}>
                    Remember for 30 days
                  </Text>
                </Stack>
                <Box>
                  <Button
                    onClick={signUpWithGoogle}
                    width="100%"
                    height="44px"
                    variant="outlined"
                    color="#D0D5DD"
                    startIcon={<Icon icon="devicon:google" />}
                  >
                    Sign up with Google
                  </Button>
                </Box>
                <Box display="flex" justifyContent={"center"}>
                  <Text
                    sx={{ textAlign: "center" }}
                    color="#fff"
                    fs="14px"
                    fw="400"
                  >
                    Already have an account?
                  </Text>
                  <Text
                    fs="14px"
                    fw="700"
                    to="/login"
                    sx={{
                      textAlign: "center",
                      marginLeft: 1,
                      color: "#2DDB81",
                      cursor: "pointer",
                    }}
                  >
                    Log in
                  </Text>
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
              src="svgs/Auth-Img.svg"
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
