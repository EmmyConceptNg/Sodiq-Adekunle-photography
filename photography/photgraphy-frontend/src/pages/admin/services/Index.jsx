import React, { useState } from "react";
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
import AddServiceModal from "../../../components/modals/services/AddServiceModal";
import EditServiceModal from "../../../components/modals/services/EditServiceModal";
import DeleteModal from "../../../components/modals/others/DeleteModal";

export default function Services(props) {
  const [services, setServices] = useState([]);

  return (
    <Stack spacing={3}>
      <Header services={services} setServices={setServices} />
      <ServiceTable setServices={setServices} />
    </Stack>
  );
}

function Header({ services, setServices }) {
  const [addService, setAddService] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
            Services
          </Text>
          <Text fs="16px" fw="400" color="gray">
            Manage all services
          </Text>
        </Box>
        <Button
          variant="contained"
          height="45px"
          onClick={() => setAddService(true)}
        >
          Add Service
        </Button>
      </Stack>
      <AddServiceModal
        open={addService}
        setOpen={setAddService}
        services={services}
        setServices={setServices}
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

function ServiceTable({ setServices }) {
  const [editService, setEditService] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [deleteService, setDeleteService] = useState(false);
  const [delId, setDelId] = useState("");

  const handleEdit = (item) => {
    setSelectedService(item);
    setEditService(true);
  };
  const handleDelete = (item) => {
    setDelId(item);
    setDeleteService(true);
  };
  return (
    <>
      <EditServiceModal
        open={editService}
        setOpen={setEditService}
        selectedService={selectedService}
        setServices={setServices}
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

Services.propTypes = {};
ServiceTable.propTypes = {
  setServices: PropTypes.func,
};
Header.propTypes = {
  services: PropTypes.array,
  setServices: PropTypes.func,
};
