import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { FileDrop } from "react-file-drop";

const DragNdrop = ({ onFilesSelected, width, height }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    const fileArray = Array.from(files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);
    onFilesSelected((prevFiles) => [...prevFiles, ...fileArray]);
  };

  return (
    <Box
      sx={{ border: "2px dashed #ccc", p: 2, width, height }}
      onDrop={(event) => event.preventDefault()}
    >
      <FileDrop onDrop={handleDrop}>
        <p>Drag & drop some files here, or click to select files</p>
        <Grid container spacing={2}>
          {uploadedFiles.map((file, index) => (
            <Grid item key={index} xs={4}>
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded ${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          ))}
        </Grid>
      </FileDrop>
    </Box>
  );
};

DragNdrop.propTypes = {
  onFilesSelected: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default DragNdrop;
