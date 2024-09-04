import { useState } from "react";

import { Stack, Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/service", name: "Service" },
    { to: "/works", name: "Works" },
    { to: "/contact", name: "Contact" },
  ];

  const drawerContent = (
    <Box bgcolor="#000"
      sx={{ width: 250, height : '100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Stack spacing={2} sx={{ mt: 2 }}>
        {navLinks.map((nav, index) => (
          <Link
            style={{ color: "#fff", cursor: "pointer", textDecoration: "none" }}
            to={nav?.to}
            smooth={true}
            duration={500}
            key={index}
          >
            <Box display="flex" mx="16px">
              {nav?.name && nav?.name}
              {nav?.image && <Box component="img" src={nav?.image} />}
            </Box>
          </Link>
        ))}
        
        
        
      </Stack>
    </Box>
  );

  return (
    <>
      <Box
        flexGrow={1}
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-start",
        }}
      >
        <Stack
          justifyContent="flex-start"
          spacing={5}
          sx={{ ml: "30px" }}
          direction="row"
          alignItems="flex-start"
        >
          {navLinks.map((nav, index) => (
            <Link
              style={{ color: "#fff", cursor: "pointer" }}
              to={nav?.to}
              smooth={true}
              duration={500}
              key={index}
            >
              <Box display="flex">
                {nav?.name && nav?.name}
                {nav?.image && <Box component="img" src={nav?.image} />}
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", flexGrow : 1 },
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "#2DDB81" }} />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
}

function Auth() {
  const navigate = useNavigate();
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Button
        sx={{ mt: 1 }}
        onClick={() => navigate("/login")}
        height="40px"
        width="75px"
        variant="outlined"
        color="#2DDB81"
      >
        Login
      </Button>
      <Button
        sx={{ mt: 1 }}
        onClick={() => navigate("/signup")}
        height="40px"
        width="88px"
        variant="outlined"
        color="#2DDB81"
      >
        Sign Up
      </Button>
      <Box component="img" src="/svgs/Search.svg" />
    </Stack>
  );
}



NavBar.propTypes = {
  ffor: PropTypes.string,
};
