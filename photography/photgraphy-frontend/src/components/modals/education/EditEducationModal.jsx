import { Box, Modal, Stack, Grid, Divider, IconButton } from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../../Button";
import PropTypes from "prop-types";
import axios from "../../../api/axios";
import { ToastContainer } from "react-toastify";
import { notify } from "../../../utils/Index";
import Input from "../../Input";
import { Form, Formik } from "formik";
import Text from "../../Text";
import { Cancel } from "@mui/icons-material";
import SuccessModal from "../others/SuccessModal";
import ErrorModal from "../others/ErrorModal";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "700px", xs: "96vw" },
  bgcolor: "#121214",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  border: "1px solid gray",
  borderRadius: "18px",
  p: 4,
  maxHeight: "90vh", // Ensure the modal doesn't exceed the viewport height
  overflow: "hidden", // Hide overflow
};

const scrollableContainerStyle = {
  overflowY: "auto", // Enable vertical scrolling
  paddingRight: "16px", // Ensure padding for scrollbar space
  overflowX: "hidden", // Disable horizontal scrolling
  height: "auto", // Adjust height automatically
  maxHeight: "calc(90vh - 80px)", // Account for padding and other elements
};

const convertDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0]; // Extract the date part in YYYY-MM-DD format
};

export default function EditEducationModal({
  open,
  setOpen,
  setEducations,
  selectedEducation,
  educations,
}) {
  const initialValues = {
    name: selectedEducation?.name || "",
    course: selectedEducation?.course || "",
    startDate: convertDate(selectedEducation?.startDate) || "",
    endDate: convertDate(selectedEducation?.endDate) || "",
  };

  const validation = Yup.object({
    name: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date().required("Required"),
  });

  const handleClose = () => {
    setOpen(false);
  };

  // Access Redux tokens
  const accessToken = useSelector((state) => state.user.accessToken);

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleSuccess = (message) => {
    setMessage(message);
    setSuccessModal(true);
  };

  const handleError = (message) => {
    setMessage(message);
    setErrorModal(true);
  };

  const handleUpdate = async (values, actions) => {
    try {
      console.log("Submitting form with values:", values); // Debugging step

      const response = await axios.put(
        `/api/educations/${selectedEducation?._id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { education } = response.data;
      setEducations((prev) => [...prev, education]);
      handleSuccess(
        response.data.message || "You have successfully added the education"
      );
      setOpen(false);
    } catch (error) {
      console.error("Error adding education:", error);
      handleError(
        error.response?.data?.message || "An error occurred. Please try again"
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box mb="20px">
            <Stack direction="row" justifyContent="space-between">
              <Text
                sx={{ textAlign: "left" }}
                fs="24px"
                fw="900"
                ff="Helvetica Neue"
                color="#fff"
              >
                Add Education
              </Text>
              <IconButton onClick={handleClose}>
                <Cancel sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
            <Divider sx={{ bgcolor: "gray", mt: "10px" }} />
          </Box>
          <Box sx={scrollableContainerStyle}>
            <Formik
              initialValues={initialValues}
              validationSchema={validation}
              onSubmit={handleUpdate}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Stack spacing={10}>
                    <Grid container spacing={{ md: 5, xs: 0 }}>
                      {[
                        {
                          label: "Institution Name",
                          placeholder: "Institution Name",
                          required: true,
                          type: "text",
                          name: "name",
                        },
                        {
                          label: "Course of Study",
                          placeholder: "Course of Study",
                          required: true,
                          type: "text",
                          name: "course",
                        },
                        {
                          label: "Start Date",
                          placeholder: "Start Date",
                          required: true,
                          type: "date",
                          name: "startDate",
                        },
                        {
                          label: "End Date",
                          placeholder: "End Date",
                          required: true,
                          type: "date",
                          name: "endDate",
                        },
                      ].map((item, index) => (
                        <Grid item xs={12} key={index}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            width="100%"
                          >
                            <Input
                              height="45px"
                              name={item.name}
                              readOnly={item?.readOnly}
                              label={item.label}
                              required={item.required}
                              placeholder={item.placeholder}
                              aria-label={item.label}
                              type={item.type}
                              defaultValue={item?.defaultValue}
                            />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Stack
                      spacing={2}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Button
                        variant="outlined"
                        onClick={handleClose}
                        color="#2ddb81"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        loading={isSubmitting}
                        variant="contained"
                        sx={{ ml: "auto" }}
                      >
                        <span style={{ color: "#000" }}>Save</span>
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Modal>
      <SuccessModal
        message={message}
        open={successModal}
        setOpen={setSuccessModal}
      />
      <ErrorModal message={message} open={errorModal} setOpen={setErrorModal} />
    </>
  );
}

EditEducationModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setEducations: PropTypes.func,
  educations: PropTypes.array,
};
