import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Text from "../../Text";
import { Stack } from "@mui/material";
import Button from "../../Button";
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
    padding: "0 200px",
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
          {/* <Box
              component="img"
              src="/logo/Logo.svg"
              sx={{ height: "72px" }}
            /> */}

          <Text color="#fff" fw="400" fs="24px" ff="Sacramento, cursive">
            Sodiq Adekunle photography
          </Text>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavBar />
          </Box>
          <Action />
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}


function Action() {
  const navigate = useNavigate();
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Button
        sx={{ mt: 1 }}
        onClick={() => navigate("/contact")}
        height="40px"
        width="100px"
        variant="text"
        color="#2DDB81"
      >
        Hire Me
      </Button>
    </Stack>
  );
}