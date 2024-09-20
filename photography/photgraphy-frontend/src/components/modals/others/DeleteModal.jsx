import { Box, Modal, Stack } from "@mui/material";
import { useState } from "react";
import Button from "../../Button";
import PropTypes from "prop-types";

import { ToastContainer } from "react-toastify";
import Text from "../../Text";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "400px", xs: "400px" },
  bgcolor: "#121214",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  border: "1px solid gray",
  borderRadius: "18px",
  p: 4,
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};

export default function DeleteModal({
  open,
  setOpen,
  route,
  description,
  cleanUp,
  delId,
}) {
  const [deleting, setDeleting] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [message, setMessage] = useState("");

  const accessToken = useSelector((state) => state.user.accessToken);

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

  const handleDelete = () => {
    setDeleting(true);
    axios
      .delete(route, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        cleanUp((prevServices) =>
          prevServices.filter((service) => service._id !== delId)
        );
        handleClose(); // Close DeleteModal first
        handleSuccess(
          response.data.message || "You have successfully deleted this data"
        );
      })
      .catch((error) => {
        handleClose(); // Close DeleteModal first
        handleError(
          error.response?.data?.message || "An error occurred. Please try again"
        );
      })
      .finally(() => {
        setDeleting(false);
      });
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
          <Box
            component="img"
            src="/icons/delete_icon.gif"
            sx={{ height: "100px" }}
          />
          <Header description={description} />
          <Action
            handleDelete={handleDelete}
            handleClose={handleClose}
            deleting={deleting}
          />
        </Box>
      </Modal>
    </>
  );
}

function Header({ description }) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text
            sx={{ textAlign: "center" }}
            fs="32px"
            fw="900"
            ff="Helvetica Neue"
            color="#fff"
          >
            Delete Item!
          </Text>
          <Text sx={{ textAlign: "center" }} fs="16px" fw="300" color="#ccc">
            {description}
          </Text>
        </Box>
      </Stack>
    </>
  );
}

function Action({ handleDelete, handleClose, deleting }) {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={handleClose} color="#2ddb81">
          Cancel
        </Button>
        <Button onClick={handleDelete} loading={deleting} variant="contained">
          <span style={{ color: "#000", display: deleting ? "none" : "flex" }}>
            Confirm
          </span>
        </Button>
      </Stack>
    </>
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  cleanUp: PropTypes.func,
  route: PropTypes.string,
  description: PropTypes.string,
  delId: PropTypes.string,
};
Header.propTypes = {
  description: PropTypes.string,
};
Action.propTypes = {
  handleDelete: PropTypes.func,
  handleClose: PropTypes.func,
  deleting: PropTypes.bool,
};
