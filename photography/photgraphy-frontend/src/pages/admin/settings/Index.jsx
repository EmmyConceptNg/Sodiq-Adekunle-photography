import { Box, Grid2, OutlinedInput, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { useRef, useState } from "react";
import ProfileDetails from "./ProfileDetails";
import { useDispatch, useSelector } from "react-redux";
import SuccessModal from "../../../components/modals/others/SuccessModal";
import ErrorModal from "../../../components/modals/others/ErrorModal";
import { setUser } from "../../../redux/UserReducer";
import axios, { getImageUrl } from "../../../api/axios";
import { Field, Form, Formik } from "formik";
import { aboutValidation } from "../../../utils/Index";

export default function Settings() {
  const dispatch = useDispatch();

  // Access Redux tokens
  const user = useSelector((state) => state.user.details);
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
        `/api/auth/update/${user?._id}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const { user: _user } = response.data;
      dispatch(setUser({ user: _user, accessToken, refreshToken }));
      handleSuccess(
        response.data.message ||
          "You have successfully updated the admin profile"
      );
    } catch (error) {
      console.error("Error adding portfolio:", error);
      handleError(
        error.response?.data?.message || "An error occurred. Please try again"
      );
    } finally {
      actions.setSubmitting(false);
    }
  };
  return (
    <>
      <SuccessModal
        message={message}
        open={successModal}
        setOpen={setSuccessModal}
      />
      <ErrorModal message={message} open={errorModal} setOpen={setErrorModal} />
      <Stack spacing={3}>
        <Header />
        <Grid2
          container
          spacing={5}
          sx={{ mx: { md: "200px", xs: "15px" }, mt: 5 }}
        >
          <ImageSection />
          <About handleUpdate={handleUpdate} user={user} />
        </Grid2>
        <ProfileDetails handleUpdate={handleUpdate} />
      </Stack>
    </>
  );
}

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
          Settings
        </Text>
        <Text fs="16px" fw="400" color="gray">
          Edit and Update Admin Details
        </Text>
      </Box>
    </Stack>
  );
}

Settings.propTypes = {};

function ImageSection() {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);
  const user = useSelector((state) => state.user.details);
  const refreshToken = useSelector((state) => state.user.refreshToken);
  const [uploading, setUploading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.put(
          `/api/auth/update-display-image/${user?._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const { user: updatedUser } = response.data;
        dispatch(setUser({ user: updatedUser, accessToken, refreshToken }));
        setMessage("Profile image updated successfully");
        setSuccessModal(true);
      } catch (error) {
        console.error("Error uploading image:", error);
        setMessage(
          error.response?.data?.message || "An error occurred during upload"
        );
        setErrorModal(true);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#121214",
        p: { md: "40px", xs: "20px" },
        border: "1px solid rgba(0,0,0,.05)",
        borderRadius: "20px",
        boxShadow:
          "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
        textAlign: "center",
      }}
    >
      <Image src={user?.image ? getImageUrl(user?.image) : "/icons/profile.png"} alt={user?.firstName} sx={{ borderRadius : '100%' }} />
      <Box>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
        <Button
          sx={{ mt: 3 }}
          width="100%"
          height="40px"
          variant="outlined"
          color="#2DDB81"
          onClick={handleButtonClick}
          loading={uploading}
        >
          {uploading ? "Uploading..." : "Change Display Image"}
        </Button>
      </Box>
      <SuccessModal
        message={message}
        open={successModal}
        setOpen={setSuccessModal}
      />
      <ErrorModal message={message} open={errorModal} setOpen={setErrorModal} />
    </Grid2>
  );
}


function About({ handleUpdate, user }) {
  const [editable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(!editable);
  };

  const initialValues = {
    about: user?.about ?? "", // Ensure the initial value is tied to the user's current "about"
  };

  return (
    <Grid2 size={{ xs: 12, md: 8 }}>
      <Stack spacing={5}>
        <Box
          bgcolor="#121214"
          sx={{
            p: { md: "40px", xs: "20px" },
            border: "1px solid rgba(0,0,0,.05)",
            borderRadius: "20px",
            boxShadow:
              "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          }}
        >
          <Text
            fs={{ md: "32px", xs: "24px" }}
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
            sx={{ my: 3 }}
          >
            About Us
          </Text>

          {!editable ? (
            <>
              <Text
                fs={{ md: "18px", xs: "12px" }}
                fw="500"
                color="#ccc"
                sx={{ my: 3 }}
              >
                {user?.about || "No about info available."} 
              </Text>
            </>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={aboutValidation}
              onSubmit={(values, actions) => {
                handleUpdate(values, actions); // Call handleUpdate with form values
                setEditable(false); // Close edit mode upon saving
              }}
            >
              {({ isSubmitting, errors, touched, setFieldValue }) => (
                <Form>
                  <Field
                    as={OutlinedInput}
                    name="about"
                    multiline
                    rows={10}
                    fullWidth
                    sx={{
                      color: "#fff",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                      },
                      borderRadius: 2,
                    }}
                    error={touched.about && Boolean(errors.about)}
                    helperText={touched.about && errors.about}
                  />

                  <Button
                    sx={{ mt: 3 }}
                    height="40px"
                    variant="contained"
                    color="#2DDB81"
                    type="submit"
                    loading={isSubmitting}
                  >
                    <span style={{ color: "#000" }}>Save About</span>
                  </Button>
                </Form>
              )}
            </Formik>
          )}

          {!editable && (
            <Button
              sx={{ mt: 3 }}
              height="40px"
              variant="outlined"
              color="#2DDB81"
              onClick={handleEdit}
            >
              Edit About
            </Button>
          )}
        </Box>
      </Stack>
    </Grid2>
  );
}

