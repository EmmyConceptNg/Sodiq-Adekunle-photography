import {
  Box,
  Modal,
  Stack,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Text from "../../Text";
import Button from "../../Button";
import PropTypes from "prop-types";
import axios from "../../../api/axios";

import { ToastContainer } from "react-toastify";
import { notify } from "../../../utils/Index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "80vw", xs: "100vw" },
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column", 
  border: '1px solid #fff',
  borderRadius : '18px',
  p: 4,
};

export default function AddUpdatesModal({ open, setOpen, setUpdates, updates }) {
  

  const [content, setContent] = useState(updates || '');


  const handleClose = () => {
    setOpen(false);
  };

  
  const [creating, setCreating] = useState(false);

  const saveEditing = async (e) => {
      e.preventDefault(true)
    if(!content){
        notify('Please fill all input fields', 'error')
        return false
    }
    setCreating(true);
    try {

      const response = await axios
        .post(`/api/updates`, {content})
        
         setUpdates(response.data.update.content);
         setCreating(false);
         handleClose();
         setTimeout(() => {
            notify("Update added successfully", "success");
         }, 1000);
    } catch (error) {
      console.error("Error saving editing:", error);
      setCreating(false);
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
        <form onSubmit={saveEditing}>
          <Box sx={style}>
            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "auto" }}>
              <Typography variant="h6">Add News</Typography>

              <TextField
                label="Content"
                variant="outlined" multiline rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth required
              />
            </Stack>

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="outlined" onClick={handleClose} color="#131C30">
                Cancel
              </Button>
              <Stack spacing={2} direction="row">
                <Button type="submit" variant="contained" loading={creating}>
                  Save
                </Button>
              </Stack>
            </Box>
          </Box>
        </form>
      </Modal>
    </>
  );
}

AddUpdatesModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setUpdates: PropTypes.func,
  updates: PropTypes.string,
};
