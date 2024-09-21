import {
  Box,
  Modal,
  Stack,
  Grid,
  Grid2,
  IconButton,
  Divider,
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
import Text from "../../Text";
import { Cancel, Upload, Delete } from "@mui/icons-material";

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
  maxHeight: "90vh",
  overflow: "hidden",
};

const scrollableContainerStyle = {
  overflowY: "auto",
  paddingRight: "16px",
  overflowX: "hidden",
  height: "auto",
  maxHeight: "calc(90vh - 80px)",
};

const imageUploadBoxStyle = {
  border: "2px dashed gray",
  borderRadius: "8px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function AddPortfolioModal({
  open,
  setOpen,
  setPortfolios,
  portfolios,
}) {
  const initialValues = {
    name: "",
    client: "",
    date: "",
    description: "",
    service: "",
  };

  // Access Redux tokens
  const accessToken = useSelector((state) => state.user.accessToken);

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [message, setMessage] = useState("");

  const validation = Yup.object({
    name: Yup.string().required("Required"),
    client: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    description: Yup.string().required("Required"),
  });
  const [files, setFiles] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

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
      const formData = new FormData();
      formData.append("service", values.service);
      formData.append("name", values.name);
      formData.append("client", values.client);
      formData.append("date", values.date);
      formData.append("description", values.description);
      files.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post("/api/portfolios", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Don't specify a boundary
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { portfolio } = response.data;
      setPortfolios((prev) => [...prev, portfolio]);
      handleSuccess(
        response.data.message || "You have successfully added the portfolio"
      );
      setOpen(false);
    } catch (error) {
      console.error("Error adding portfolio:", error);
      handleError(
        error.response?.data?.message || "An error occurred. Please try again"
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const openFileDialog = () => {
    document.getElementById("fileInput").click();
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
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
          <Box mb="20px">
            <Stack direction="row" justifyContent="space-between">
              <Text
                sx={{ textAlign: "left" }}
                fs="24px"
                fw="900"
                ff="Helvetica Neue"
                color="#fff"
              >
                Add Portfolio
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
                    <Grid2 container spacing={{ md: 5, xs: 0 }}>
                      {[
                        {
                          label: "Portfolio Name",
                          placeholder: "Portfolio Name",
                          required: true,
                          type: "text",
                          name: "name",
                        },
                        {
                          label: "Client Name",
                          placeholder: "Client Name",
                          required: true,
                          type: "text",
                          name: "client",
                        },
                        {
                          label: "Portfolio Date",
                          placeholder: "Portfolio Date",
                          required: true,
                          type: "date",
                          name: "date",
                        },
                        {
                          label: "Portfolio Description",
                          placeholder: "Portfolio Description",
                          required: true,
                          type: "text",
                          name: "description",
                          multiline: true,
                          rows: 5,
                        },
                      ].map((item, index) => (
                        <Grid2 size={{ xs: 12 }} key={index}>
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
                              multiline={item.multiline}
                              rows={item.rows}
                            />
                          </Box>
                        </Grid2>
                      ))}
                    </Grid2>

                    <Box my={4}>
                      <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                      <Box sx={imageUploadBoxStyle} onClick={openFileDialog}>
                        <Upload sx={{ fontSize: 50 }} />
                        <Text>
                          Click here to add multiple images to the portfolio
                        </Text>
                      </Box>
                      <Grid2 container spacing={2} mt={2}>
                        {files.map((file, index) => (
                          <Grid2 size={{ xs: 4 }} key={index}>
                            <Box position="relative">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Uploaded ${index}`}
                                style={{ width: "100%", height: "auto" }}
                              />
                              <IconButton
                                size="small"
                                sx={{
                                  position: "absolute",
                                  top: 5,
                                  right: 5,
                                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                                  color: "#fff",
                                }}
                                onClick={() => removeFile(index)}
                              >
                                <Delete />
                              </IconButton>
                            </Box>
                          </Grid2>
                        ))}
                      </Grid2>
                    </Box>

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
    </>
  );
}

AddPortfolioModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setPortfolios: PropTypes.func.isRequired,
  portfolios: PropTypes.array.isRequired,
};
