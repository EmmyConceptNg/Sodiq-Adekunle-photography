import { Box, Checkbox, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Text from "../../components/Text";
import { loginValidation, notify } from "../../utils/Index";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form, Formik } from "formik";
import axios from "../../api/axios";
import Footer from "../../components/layouts/Footer";
import { setUser } from "../../redux/UserReducer";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (values, actions) => {
    actions.setSubmitting(true);

    axios
      .post("/api/auth/signin", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const { user, accessToken, refreshToken } = response.data;
        console.log(user);
        dispatch(setUser({ user, accessToken, refreshToken }));
        notify(response?.data?.message, "success");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        notify(error?.response?.data?.message, "error");
      })
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Box height="100vh" ml={{ lg: 20, xs: 0 }}>
      <ToastContainer />
      <Grid container spacing={1} justifyContent="space-between">
        <Grid item md={12} lg={6} xs={12} sm={12}>
          <Stack
            justifyContent="space-between"
            alignItems="space-between"
            sx={{ minHeight: "100vh" }}
            pl={{ lg: 10 }}
          >
            <Box mt={5}>
              <Box
                mb={5}
                display="flex"
                justifyContent={{ lg: "flex-start", xs: "center" }}
              >
                <Text
                  color="#fff"
                  fw="400"
                  fs={{ md: "24px", xs: "24px" }}
                  ff="Sacramento, cursive"
                >
                  Sodiq Adekunle photography
                </Text>
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
                  Login
                </Text>
                <Text fw="400" fs="16px" color="#fff">
                  Welcome back! Please enter your details.
                </Text>
                <Formik
                  initialValues={initialValues}
                  validationSchema={loginValidation}
                  onSubmit={handleLogin}
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
                          placeholder="Enter your email"
                          aria-label="enter your email"
                          name="email"
                          sx={{ bgcolor: "transparent" }}
                        />
                        <Input
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter your password"
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
                          <span
                            style={{
                              color: "#000",
                              display: isSubmitting ? "none" : "flex",
                            }}
                          >
                            Login
                          </span>
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
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
                    <Text
                      mx="auto"
                      fs="15px"
                      fw="500"
                      color="#2DDB81"
                      sx={{
                        cursor: "pointer",
                      }}
                      to="/reset-password/email"
                    >
                      Forget Password?
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box sx={{ alignSelf: "flex-end", width: "100%" }}>
              <Footer logo={false} />
            </Box>
          </Stack>
        </Grid>
        <Grid item md={12} lg={6} xs={12} sm={12}>
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
              src="svgs/auth-image.png"
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
