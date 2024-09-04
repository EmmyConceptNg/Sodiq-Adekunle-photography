import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";


import CloseIcon from "@mui/icons-material/Close";
import NavBar from "./NavBar";
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  background: theme.palette.background.paper,
  backgroundColor: "#000",
  justifyContent: "start",
  backdropFilter: "blur(4px)",
  padding: "0 20px",

  [theme.breakpoints.up("md")]: {
    minHeight: "70px",
    paddinLeft: 0,
    padding: "0 100px",
  },
}));
const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  paddingLeft: 0, display: "flex", justifyContent: "space-between",
  
  color: theme.palette.text.secondary,
}));
export default function Header(props) {
  const [isSidebar, setIsSidebar] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <AppBarStyled position="sticky" color="default">
      

        <ToolbarStyled style={{ padding: 0 }}>
          <Box onClick={() => navigate('/')}>
            <Box
              component="img"
              src="/logo/Logo.svg"
              sx={{ height: "72px" }}
            ></Box>
          </Box>

          <Box
            width="100%"
            sx={{
              display: 'flex',  alignItems: "center"
            }}
          >
            <NavBar />
          </Box>
        
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}
