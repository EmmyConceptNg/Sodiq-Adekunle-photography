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
import { useState, useEffect } from "react";
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
import { getImageUrl } from "../../../api/axios";

// Convert date to YYYY-MM-DD format
const convertDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0]; // Extract the date part in YYYY-MM-DD format
};

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

export default function EditPortfolioModal({
  open,
  setOpen,
  setPortfolios,
  selectedPortfolio,
  portfolios,
}) {
  const initialValues = {
    name: selectedPortfolio?.name || "",
    date: convertDate(selectedPortfolio?.date) || "",
    description: selectedPortfolio?.description || "",
    service: selectedPortfolio?.service || "",
  };

  const validation = Yup.object({
    name: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    description: Yup.string().required("Required"),
  });

  // Access Redux tokens
  const accessToken = useSelector((state) => state.user.accessToken);

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [removedFiles, setRemovedFiles] = useState([]); // Track removed files

  useEffect(() => {
    if (selectedPortfolio && selectedPortfolio.images) {
      // Populate initial files if they exist
      setFiles(
        selectedPortfolio.images.map((path, index) => ({
          path,
          id: index,
        }))
      );
    }
  }, [selectedPortfolio]);

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
      formData.append("date", values.date);
      formData.append("description", values.description);
      files.forEach((file) => {
        if (file instanceof File) {
          formData.append("images", file);
        }
      });
      formData.append("removedImages", JSON.stringify(removedFiles));

      const response = await axios.put(
        `/api/portfolios/${selectedPortfolio?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // On success, update portfolios state and close modal
      const { portfolio } = response.data;

      // Update the portfolios state by replacing the updated portfolio in the array
      const updatedPortfolios = portfolios.map((p) =>
        p._id === portfolio._id ? portfolio : p
      );

      setPortfolios(updatedPortfolios);
      handleSuccess(
        response.data.message || "You have successfully updated the portfolio"
      );
      setOpen(false);
    } catch (error) {
      console.error("Error updating portfolio:", error);
      handleError(
        error.response?.data?.message || "An error occurred. Please try again"
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleFileChange = (event) => {
    setFiles([...files, ...Array.from(event.target.files)]);
  };

  const openFileDialog = () => {
    document.getElementById("fileInputEdit").click();
  };

  const removeFile = (index) => {
    const fileToRemove = files[index];
    if (!(fileToRemove instanceof File)) {
      setRemovedFiles([...removedFiles, fileToRemove.path]);
    }
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
                Edit Portfolio
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
                              defaultValue={initialValues[item.name]} // Use initialValues to get the default value
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
                        id="fileInputEdit"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                      <Box sx={imageUploadBoxStyle} onClick={openFileDialog}>
                        <Upload sx={{ fontSize: 50 }} />
                        <Text>
                          Click here to add or replace images in the portfolio
                        </Text>
                      </Box>
                      <Grid2 container spacing={2} mt={2}>
                        {files.map((file, index) => (
                          <Grid2 size={{ xs: 4 }} key={index}>
                            <Box position="relative">
                              <img
                                src={
                                  file instanceof File
                                    ? URL.createObjectURL(file)
                                    : getImageUrl(file.path)
                                }
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
                        <span style={{ color: "#000" }}>Update</span>
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

EditPortfolioModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setPortfolios: PropTypes.func.isRequired,
  selectedPortfolio: PropTypes.object,
  portfolios: PropTypes.array.isRequired,
};
