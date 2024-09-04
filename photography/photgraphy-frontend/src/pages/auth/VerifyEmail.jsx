import { Box, Stack } from "@mui/material";

import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ArrowBack } from "@mui/icons-material";
import { notify, pinValidation } from "../../utils/Index";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import Footer from "../../components/layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/UserReducer";
import axios from '../../api/axios'



export default function VerificationEmail() {
    const user = useSelector((state) => state.user.details);
  const initialValues = {
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch()
  

  const handleChange = (event, setFieldValue) => {
    const target = event.target;
    let value = target.value;
    const index = parseInt(target.name.replace("pin", ""), 10);

    // Only allow numeric input
    if (value !== "" && !/^[0-9]$/.test(value)) {
      return;
    }

    // Set the value of the current pin input
    setFieldValue(target.name, value);

    // Move to the next pin input
    if (value && index < 4) {
      // Ensure the index is within the range of the input fields
      const nextInputName = `pin${index + 1}`;
      const nextInputField = document.getElementsByName(nextInputName)[0];
      if (nextInputField) {
        nextInputField.focus();
      }
    }
  };

  // Customize handlePaste for Formik to handle paste event
  const handlePaste = (event, setFieldValue) => {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData("text").slice(0, 4);

    // Split the pasted data into individual digits and set the values in Formik
    pastedData.split("").forEach((value, index) => {
      setFieldValue(`pin${index + 1}`, value);
    });
  };

  // Customize handleBackspace for Formik to handle backspace event
  const handleBackspace = (event, index, setFieldValue) => {
    if (event.key === "Backspace" && !event.target.value) {
      setFieldValue(`pin${index}`, ""); // clear current field
      if (index > 1) {
        // Set focus on previous field
        const prevFieldName = `pin${index - 1}`;
        document.getElementsByName(prevFieldName)[0].focus();
      }
    }
  };

    const handleSubmit = (values, actions) => {
      actions.setSubmitting(true);
      const pin = Object.values(values).join("");

      axios
        .post(`/api/auth/email/verify/${user?.email}`, { pin }) // Ensure you're sending a JSON object.
        .then((response) => {
          dispatch(setUser(response.data.user));
          navigate("/verification/email/verified");
        })
        .catch((err) => {
          notify(
            err.response?.data?.error || "An unknown error occurred",
            "error"
          );
          actions.setSubmitting(false);
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    };
  return (
    <>
      <Box display="flex" justifyContent="center" mt={10}>
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
              We sent a verification link to {user.email}
            </Text>
            <Formik
              initialValues={initialValues}
              validationSchema={pinValidation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form>
                  <Box>
                    <Stack direction="row" spacing={1}>
                      {Array.from({ length: 4 }).map((_, index) => {
                        const fieldName = `pin${index + 1}`;
                        return (
                          <Input
                            isPin
                            key={index}
                            width="80px"
                            height="80px"
                            name={fieldName}
                            onInput={(e) => {
                              e.target.value = e.target.value.slice(0, 1);
                              e.target.value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                            }}
                            type="tel"
                            inputProps={{
                              maxLength: 1,
                              onPaste: (e) => {
                                e.preventDefault();
                                handlePaste(e, setFieldValue);
                              },
                              onKeyDown: (e) =>
                                handleBackspace(e, index + 1, setFieldValue),
                            }}
                            onChange={(event) =>
                              handleChange(event, setFieldValue)
                            }
                            value={values[fieldName]}
                            maxLength={1} // Set the maxLength, not using inputProps
                            inputMode="numeric" // Ensure numeric keyboard on mobile devices
                            required
                            aria-label={`pin ${index + 1}`}
                          />
                        );
                      })}
                    </Stack>
                  </Box>
                  <Button
                    sx={{ mt: 3 }}
                    loading={isSubmitting}
                    width="100%"
                    heigh="44px"
                    type="submit"
                    variant="contained"
                  >
                    Verify email
                  </Button>
                </Form>
              )}
            </Formik>
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
              color ="#fff" 
              width="100%"
              heigh="44px"
              type="button"
              startIcon={<ArrowBack />}
              to="/login"
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
