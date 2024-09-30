import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Paper, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { DeleteForever, Edit } from '@mui/icons-material';
import DeleteModal from '../../../components/modals/others/DeleteModal';
import EditEducationModal from '../../../components/modals/education/EditEducationModal';
import AddEducationModal from '../../../components/modals/education/AddEducationModal';
import axios from '../../../api/axios'
import { useSelector } from 'react-redux';
import EmptyState from '../../../components/EmptyState';

export default function Education(props) {
  const [educations, setEducations] = useState([]);
  const [tableLoad, setTableLoad] = useState(true);
  const accessToken = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    axios
      .get("/api/educations", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setEducations(response.data.educations);
        setTableLoad(false);
      });
  }, [accessToken]);

  return (
    <Stack>
      <Header setEducations={setEducations} educations={educations} />
      <EducationTable setEducations={setEducations} tableLoad={tableLoad} educations={educations} />
    </Stack>
  );
}

Education.propTypes = {}

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

function EducationTable({ setEducations, tableLoad, educations }) {
  const [editEducation, setEditEducation] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState({});
  const [deleteEducation, setDeleteEducation] = useState(false);
  const [delId, setDelId] = useState("");

  const handleEdit = (item) => {
    setSelectedEducation(item);
    setEditEducation(true);
  };

  const handleDelete = (item) => {
    setDelId(item);
    setDeleteEducation(true);
  };

  return (
    <>
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
        <Table sx={{ width: "100%" }} aria-label="Educations table">
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
            {tableLoad ? (
              <TableLoad />
            ) : (
              educations?.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    bgcolor: index % 2 === 0 ? "#1d1f21" : "#282a2d",
                  }}
                >
                  <TableCell
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      borderBottom: "none",
                    }} // Remove bottom border
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
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      borderBottom: "none",
                    }} // Remove bottom border
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
                      <IconButton onClick={() => handleDelete(row._id)}>
                        <DeleteForever color="error" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {!tableLoad && !educations?.length > 0 && (
          <Box mt={4}>
            <EmptyState
              message="You have not added any education."
              button="Add education"
            />
          </Box>
        )}
      </TableContainer>
      <EditEducationModal
        open={editEducation}
        setOpen={setEditEducation}
        selectedEducation={selectedEducation}
        setEducations={setEducations}
        educations={educations}
      />
      {delId != "" && (
        <DeleteModal
          open={deleteEducation}
          setOpen={setDeleteEducation}
          delId={delId}
          route={`/api/educations/${delId}`}
          description="You about to delete this education. Please note that deleting this education will delete corresponding projects."
          cleanUp={setEducations}
        />
      )}
    </>
  );
}

function TableLoad() {
  return Array(5)
    .fill()
    .map((_, index) => (
      <TableRow
        key={index}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          bgcolor: index % 2 === 0 ? "#1d1f21" : "#282a2d",
        }}
      >
        {Array(3)
          .fill()
          .map((_index) => (
            <TableCell
              key={_index}
              sx={{
                color: "#fff",
                fontSize: "18px",
                borderBottom: "none",
              }} // Remove bottom border
              component="th"
              scope="row"
            >
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "gray" }}
                width="100%"
                height={30}
              />
            </TableCell>
          ))}
      </TableRow>
    ));
}

Header.propTypes = {
  educations: PropTypes.array,
  setEducations: PropTypes.func,
};

EducationTable.propTypes = {
  setEducations: PropTypes.func,
};
