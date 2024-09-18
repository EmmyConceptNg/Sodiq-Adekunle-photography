import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { DeleteForever, Edit } from '@mui/icons-material';
import DeleteModal from '../../../components/modals/others/DeleteModal';
import EditEducationModal from '../../../components/modals/education/EditEducationModal';
import AddEducationModal from '../../../components/modals/education/AddEducationModal';

export default function Education(props) {
  const [educations, setEducations] = useState([]);
  return (
    <Stack>
      <Header setEducations={setEducations} educations={educations} />
      <EducationTable setEducations={setEducations} />
    </Stack>
  );
}

Education.propTypes = {

}




function Header({educations, setEducations}) {

  const [addEducation, setAddEducation] = useState(false)
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
            Education
          </Text>
          <Text fs="16px" fw="400" color="gray">
            Manage all education
          </Text>
        </Box>
        <Button variant="contained" height="45px" onClick={() => setAddEducation(true)}>
          <span style={{ color: "#000" }}>Add Education</span>
        </Button>
      </Stack>
      <AddEducationModal
        open={addEducation}
        setOpen={setAddEducation}
        educations={educations}
        setEducations={setEducations}
      />
    </>
  );
}

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData("1", "Wedding"),
  createData("2", "Outdoor"),
  createData("3", "Studio"),
  createData("4", "Photoshoot"),
];

function EducationTable({setEducations}) {
   const [editEducation, setEditEducation] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState({});
  const [deleteService, setDeleteService] = useState(false);
  const [delId, setDelId] = useState("");

  const handleEdit = (item) => {
    setSelectedEducation(item);
    setEditEducation(true);
  };
  const handleDelete = (item) => {
    setDelId(item);
    setDeleteService(true);
  };
  return (
    <>
      <EditEducationModal
        open={editEducation}
        setOpen={setEditEducation}
        selectedEducation={selectedEducation}
        setEducations={setEducations}
      />
      {delId != "" && deleteService && (
        <DeleteModal
          open={deleteService}
          setOpen={setDeleteService}
          delId={delId}
          route=""
          description="You about to delete this service. You won't be able to retrieve this later"
        />
      )}
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: "#121214",
          py: { md: "40px", xs: "20px" },
          border: "1px solid rgba(0,0,0,.05)",
          borderRadius: "20px",
          boxShadow:
            "#ffffff06 0 .362176px .651917px -1px inset,#ffffff09 0 3px 5.4px -2px inset",
          textAlign: "center",
        }}
      >
        <Table sx={{ width: "100%" }} aria-label="services table">
          <TableHead>
            <TableRow>
              {[
                { align: "left", name: "S/N" },
                { align: "center", name: "Name" },
                { align: "right", name: "Action" },
              ].map(({ align, name }) => (
                <TableCell
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: 600,
                    borderBottom: "none",
                  }}
                  key={name}
                  align={align}
                >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  bgcolor: index % 2 === 0 ? "#1d1f21" : "#282a2d",
                }}
              >
                <TableCell
                  sx={{ color: "#fff", fontSize: "18px", borderBottom: "none" }} // Remove bottom border
                  component="th"
                  scope="row"
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    borderBottom: "none",
                    textAlign: "center",
                  }} // Remove bottom border
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "#fff", fontSize: "18px", borderBottom: "none" }} // Remove bottom border
                  component="th"
                  scope="row"
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <IconButton onClick={() => handleEdit(row)}>
                      <Edit color="info" />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteForever color="error" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


Header.propTypes = {
  educations: PropTypes.array,
  setEducations: PropTypes.func,
};

EducationTable.propTypes = {
  setEducations: PropTypes.func,
};