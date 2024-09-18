import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { DeleteForever, Edit } from "@mui/icons-material";
import Button from "../../../components/Button";
import Education from "./Education";
import Experience from "./Experience";

export default function EducationAndExperience(props) {
  return (
    <Stack spacing={3}>
      <Education />
      <Experience />
    </Stack>
  );
}



EducationAndExperience.propTypes = {};
