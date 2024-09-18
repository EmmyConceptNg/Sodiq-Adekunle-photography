import React from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { DeleteForever, Edit } from '@mui/icons-material';

export default function Experience(props) {
  return (
    <Stack>
      <Header />
      <ServiceTable />
    </Stack>
  );
}

Experience.propTypes = {};




function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
          Experiences
        </Text>
        <Text fs="16px" fw="400" color="gray">
          Manage all experiences
        </Text>
      </Box>
      <Button variant="contained" height="45px">
        Add Experience
      </Button>
    </Stack>
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

function ServiceTable() {
  return (
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
                  <IconButton>
                    <Edit color="info" />
                  </IconButton>
                  <IconButton>
                    <DeleteForever color="error" />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

