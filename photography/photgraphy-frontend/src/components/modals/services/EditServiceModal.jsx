import {
  Box,
  Modal,
  Stack,
  Grid2,
} from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../../Button";
import PropTypes from "prop-types";
import axios from "../../../api/axios";

import { ToastContainer } from "react-toastify";
import { notify } from "../../../utils/Index";
import Input from "../../Input";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import SuccessModal from "../others/SuccessModal";
import ErrorModal from "../others/ErrorModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "500px", xs: "96vw" },
  bgcolor: "#121214",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  border: "1px solid gray",
  borderRadius: "18px",
  p: 4,
};

export default function EditServiceModal({ open, setOpen, setServices, selectedService, services }) {
  const initialValues = {
    name: selectedService.name ?? "",
  };

  const validation = Yup.object({
    name: Yup.string().required("Required"),
  });

  const handleClose = () => {
    setOpen(false);
  };

  // Access Redux tokens
  const accessToken = useSelector((state) => state.user.accessToken);
  const refreshToken = useSelector((state) => state.user.refreshToken);

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
      const response = await axios.put(
        `/api/services/${selectedService?._id}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // On success, update services state and close modal
      const { service } = response.data;

      // Update the services state by replacing the updated service in the array
      const updatedServices = services?.map((s) =>
        s._id === service._id ? service : s
      );

      setServices(updatedServices);
       handleSuccess(
         response.data.message || "You have successfully deleted this data"
       );
      setOpen(false);
    } catch (error) {
      console.error("Error updating service:", error);
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
      <SuccessModal
        message={message}
        open={successModal}
        setOpen={setSuccessModal}
      />
      <ErrorModal message={message} open={errorModal} setOpen={setErrorModal} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={handleUpdate}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <Stack spacing={10}>
                  <Grid2 container spacing={{ md: 5, xs: 0 }}>
                    {[
                      {
                        label: "Service Name",
                        placeholder: "Service Name",
                        required: true,
                        type: "text",
                        name: "name",
                      },
                    ].map((item, index) => (
                      <Grid2
                        size={{ md: 12, xs: 12 }}
                        key={index}
                        mb={{ xs: 5, md: 0 }}
                      >
                        <Box display="flex">
                          <Input
                            name={item.name}
                            readOnly={item?.readOnly}
                            height="45px"
                            label={item.label}
                            required={item.required}
                            placeholder={item.placeholder}
                            aria-label={item.label}
                            type={item.type}
                            defaultValue={item?.defaultValue}
                            onInput={item.onInput}
                          />
                        </Box>
                      </Grid2>
                    ))}
                  </Grid2>

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
                      <span style={{ color: "#000" }}>Update</span>
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}

EditServiceModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setServices: PropTypes.func,
  selectedService: PropTypes.object,
};
