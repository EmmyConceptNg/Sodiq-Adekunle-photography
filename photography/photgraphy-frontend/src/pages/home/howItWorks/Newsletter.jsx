import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Form, Formik } from "formik";
import { newsletterValidation } from "../../../utils/Index";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const initialValues = {
    email: "",
  };
  const handleNewsLetter = (values, actions) => {};

  const navigate = useNavigate();

  return (
    <>
      <Stack
        sx={{
          border: "1px solid #10281B",
          borderRadius: "16px",
          mx: { xl: "100px", lg: 10, xs: 2 },
          py: 10,
          bgcolor: "#051B0F4F", zIndex : '999px',
        }}
        mt={10}
        justifyContent="space-between"
        spacing={2}
      >
        <Text
          color="#fff"
          fw="700"
          ff="Helvetica Neue"
          fs={{ md: "36px", lg: "36px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "center",
          }}
        >
          Still thinking about it?
        </Text>
        <Text
          color="#fff"
          fw="400"
          fs={{ md: "20px", lg: "20px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "center",
          }}
        >
          All certificates in one place
        </Text>

        <Box px={{ xl: "480px", md: "200px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={newsletterValidation}
            onSubmit={handleNewsLetter}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack
                  spacing={2}
                  direction={{ md: "row", xs: "column" }}
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Input
                    sx={{ bgcolor: "transparent" }}
                    height="48px"
                    name="email"
                    placeholder="Enter your email"
                    aria-label="enter your email"
                  />
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    height="48px"
                    width="300px"
                    variant="contained"
                  >
                    Join the waitlist
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>

          <Box display="flex" justifyContent="flex-start">
            <Text
              color="#FFFFFF59"
              fw="400"
              fs={{ md: "14px", lg: "14px", sm: "12px", xs: "12px" }}
              sx={{
                textAlign: { md: "left", xs: "center" },
                mt: 2,
                mx: { sm: "auto", md: 0 },
              }}
            >
              We care about your data in our{" "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  navigate("privacy");
                }}
              >
                privacy policy
              </span>
              .
            </Text>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
