import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Skeleton, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { DeleteForever, Edit } from "@mui/icons-material";
import Button from "../../../components/Button";

import AddPortfolioModal from "../../../components/modals/portfolios/AddPortfolioModal";
import EditPortfolioModal from "../../../components/modals/portfolios/EditPortfolioModal";
import DeleteModal from "../../../components/modals/others/DeleteModal";
import { useSelector } from "react-redux";
import axios from "../../../api/axios";
import EmptyState from "../../../components/EmptyState";

export default function Portfolio() {
  const [portfolios, setPortFolios] = useState([]);
  const [tableLoad, setTableLoad] = useState(true);

  const accessToken = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    axios
      .get("/api/portfolios", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPortFolios(response.data.portfolios);
        setTableLoad(false);
      });
  }, [accessToken]);

  return (
    <Stack spacing={3}>
      <Header portfolios={portfolios} setPortFolios={setPortFolios} />
      <PortfolioTable
        setPortFolios={setPortFolios}
        tableLoad={tableLoad}
        portfolios={portfolios}
      />
    </Stack>
  );
}

function Header({ portfolios, setPortfolios }) {
  const [addPortfolio, setAddPortfolio] = useState(false);
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fs="32px" fw="900" ff="Helvetica Neue" color="#fff">
            Portfolios
          </Text>
          <Text fs="16px" fw="400" color="gray">
            Manage all portfolios
          </Text>
        </Box>
        <Button
          variant="contained"
          height="45px"
          onClick={() => setAddPortfolio(true)}
        >
          <span style={{ color: "#000" }}>Add Portfolio</span>
        </Button>
      </Stack>
      <AddPortfolioModal
        open={addPortfolio}
        setOpen={setAddPortfolio}
        portfolios={portfolios}
        setPortFolios={setPortfolios}
      />
    </>
  );
}

function PortfolioTable({ setPortfolios, tableLoad, portfolios }) {
  const [editPortfolio, setEditPortfolio] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({});
  const [deletePortfolio, setDeletePortfolio] = useState(false);
  const [delId, setDelId] = useState("");

  const handleEdit = (item) => {
    setSelectedPortfolio(item);
    setEditPortfolio(true);
  };
  const handleDelete = (item) => {
    setDelId(item);
    setDeletePortfolio(true);
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
        <Table sx={{ width: "100%" }} aria-label="portfolios table">
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
              portfolios?.map((row, index) => (
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
        {!tableLoad && !portfolios?.length > 0 && (
         <Box mt={4}>
          <EmptyState message="You have not added any portfolio." button="Add portfolio" />
         </Box>
        )}
      </TableContainer>
      <EditPortfolioModal
        open={editPortfolio}
        setOpen={setEditPortfolio}
        selectedPortfolio={selectedPortfolio}
        setPortfolios={setPortfolios}
        portfolios={portfolios}
      />
      {delId != "" && (
        <DeleteModal
          open={deletePortfolio}
          setOpen={setDeletePortfolio}
          delId={delId}
          route={`/api/portfolios/${delId}`}
          description="You about to delete this portfolio. Please note that deleting this portfolio will delete corresponding projects."
          cleanUp={setPortfolios}
        />
      )}
    </>
  );
}

function TableLoad() {
  return Array(5)
    .fill()
    .map((index) => (
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

Portfolio.propTypes = {};
PortfolioTable.propTypes = {
  setPortfolios: PropTypes.func,
  tableLoad: PropTypes.bool,
  portfolios: PropTypes.array,
};
Header.propTypes = {
  portfolios: PropTypes.array,
  setPortfolios: PropTypes.func,
};
