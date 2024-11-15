import {
  Box,
  Modal,
  Stack,
  Grid,
  Divider,
  IconButton,
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
import Text from "../../Text";
import { Cancel, Upload } from "@mui/icons-material";


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

const imageUploadBoxStyle = {
  border: "2px dashed #fff",
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
  setServices,
  services,
}) {
  const initialValues = {
    name: "",
   
    date: "",
    description: "",
    service: "",
  };

  const validation = Yup.object({
    name: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    description: Yup.string().required("Required"),
  });

  const handleClose = () => {
    setOpen(false);
  };

  const [creating, setCreating] = useState(false);
  const [files, setFiles] = useState([]);

  const handleUpdate = async (values) => {
    if (!files.length || !values.service) {
      notify("Please fill all input fields and upload images", "error");
      return false;
    }
    setCreating(true);
    try {
      const formData = new FormData();
      formData.append("service", values.service);
      formData.append("name", values.name);
      formData.append("date", values.date);
      formData.append("description", values.description);
      files.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post("/api/portfolio", formData);
      notify(response.data.message, "success");
      setServices([...services, response.data.portfolio]);
      setCreating(false);
      handleClose();
    } catch (error) {
      console.error("Error saving editing:", error);
      notify("Failed to create portfolio", "error");
      setCreating(false);
    }
  };

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const openFileDialog = () => {
    document.getElementById("fileInput").click();
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
                    <Grid2 container spacing={{ md: 5, xs: 5 }}>
                      {[
                        {
                          label: "Project Name",
                          placeholder: "Project Name",
                          required: true,
                          type: "text",
                          name: "name",
                        },
                        {
                          label: "Project Date",
                          placeholder: "Project Date",
                          required: true,
                          type: "date",
                          name: "date",
                        },
                        {
                          label: "Project Description",
                          placeholder: "Project Description",
                          required: true,
                          type: "text",
                          name: "description",
                          multiline: true,
                          rows: 5,
                        },
                      ].map((item, index) => (
                        <Grid2 size={ 12 } key={index}>
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
                      <Grid container spacing={2} mt={2}>
                        {files.map((file, index) => (
                          <Grid item xs={4} key={index}>
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Uploaded ${index}`}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </Grid>
                        ))}
                      </Grid>
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
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setServices: PropTypes.func,
  services: PropTypes.array,
};
