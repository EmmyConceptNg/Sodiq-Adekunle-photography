import { Box, Modal, Stack, Grid2 } from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../../Button";
import PropTypes from "prop-types";

import { ToastContainer } from "react-toastify";
import Text from "../../Text";
import axios from "../../../api/axios";
import { useSelector } from "react-redux";

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

export default function ErrorModal({ open, setOpen, message }) {
 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="error-modal-title"
        aria-describedby="error-modal-description"
      >
        <Box sx={style}>
          <Box
            component="img"
            src="/icons/error_icon.gif"
            sx={{ height: "100px" }}
          />
          <Header message={message} />
          <Action handleClose={handleClose}/>
        </Box>
      </Modal>
    </>
  );
}

function Header({ message }) {
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
           Error!
          </Text>
          <Text sx={{ textAlign: "center" }} fs="16px" fw="300" color="#ccc">
            {message}
          </Text>
        </Box>
      </Stack>
    </>
  );
}

function Action({ handleClose }) {

  return (
    <Stack spacing={2} direction="row">
      <Button onClick={handleClose} variant="contained">
        <span style={{ color: "#000" }}>Okay</span>
      </Button>
    </Stack>
  );
}

ErrorModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  message: PropTypes.string,
};
Header.propTypes = {
  message: PropTypes.string,
};
Action.propTypes = {
  route: PropTypes.string,
  handleClose: PropTypes.func,
  deleting: PropTypes.bool,
};
