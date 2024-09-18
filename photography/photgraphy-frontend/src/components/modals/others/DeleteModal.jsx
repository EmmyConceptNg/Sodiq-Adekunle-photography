import { Box, Modal, Stack, Grid2 } from "@mui/material";
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
  justifyContent: 'center', alignItems:'center', gap:2
};

export default function DeleteModal({
  open,
  setOpen,
  route,
  delId,
  description,
}) {
  const [deleting, setDeleting] = useState(false);
  const handleClose = () => {
    setOpen(false);
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
          <Box component="img" src="/icons/delete_icon.gif" sx={{   height:'100px' }} />
          <Header description={description} delId={delId} />
          <Action delId={delId} handleClose={handleClose} deleting={deleting} />
        </Box>
      </Modal>
    </>
  );
}

function Header({ description, delId }) {
  const [addService, setAddService] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text sx={{ textAlign:'center' }} fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
            Delete Item!
          </Text>
          <Text sx={{ textAlign:'center' }} fs="16px" fw="300" color="#ccc">
            {description}
          </Text>
        </Box>
      </Stack>
    </>
  );
}

function Action({ delId, handleClose, deleting }) {
  return (
      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleClose} color="#2ddb81">
        Cancel
      </Button>
        <Button
          type="submit"
          loading={deleting}
          variant="contained"
        >
          <span style={{ color: "#000" }}>Confirm</span>
        </Button>
      </Stack>
    
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  route: PropTypes.string,
  description: PropTypes.string,
  delId: PropTypes.string,
};
Header.propTypes = {
  description: PropTypes.string,
  delId: PropTypes.string,
};
Action.propTypes = {
  delId: PropTypes.string,
  handleClose: PropTypes.func,
  deleting: PropTypes.bool,
};
