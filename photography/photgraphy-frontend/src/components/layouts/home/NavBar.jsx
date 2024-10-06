import { useEffect, useState } from "react";
import { Stack, Box, Drawer, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import Button from "../../Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Action } from "./Header";
import { useSelector } from "react-redux";
import axios from '../../../api/axios'

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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
    { to: "/portfolio", name: "Portfolio" },
    { to: "/contact", name: "Contact" },
    { to: "/about", name: "About" },
  ];




   const [portfolios, setPortfolios] = useState([]);

   useEffect(() => {
     axios
       .get("/api/portfolios", {
         headers: {
           "Content-Type": "application/json",
         },
       })
       .then((response) => {
         console.log(response.data);
         setPortfolios(response.data.portfolios);
       });
   }, []);





  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawerContent = (
    <Box
      bgcolor="#000"
      sx={{ width: 250, height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Stack spacing={2} sx={{ mt: 2 }}>
        {navLinks.map((nav, index) =>
          nav.name !== "Portfolio" ? (
            <Link
              style={{
                color: "#fff",
                cursor: "pointer",
                textDecoration: "none",
              }}
              to={nav?.to}
              smooth={true}
              duration={500}
              key={index}
            >
              <Box
                display="flex"
                mx="16px"
                sx={{
                  borderBottom:
                    location.pathname === nav.to ? "2px solid #2DDB81" : "none",
                }}
              >
                {nav?.name}
                {nav?.image && <Box component="img" src={nav?.image} />}
              </Box>
            </Link>
          ) : (
            <Box
              key={index}
              sx={{
                color: "#fff",
                cursor: "pointer",
                textDecoration: "none",
                mx: "16px",
              }}
            >
              <Box
                display="flex"
                sx={{
                  borderBottom: location.pathname.startsWith("/portfolio")
                    ? "2px solid #2DDB81"
                    : "none", mx : '20px'
                }}
                onClick={handleMenuClick}
              >
                {nav?.name}
                {nav?.image && <Box component="img" src={nav?.image} />}
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    bgcolor: "#121214", // Set background color here
                    p: { md: "0", xs: "0" },
                    border: "1px solid rgba(0,0,0,.05)",
                    borderRadius: "20px",
                    boxShadow:
                      "#ffffff06 0 .362176px .651917px -1px inset, #ffffff09 0 3px 5.4px -2px inset",
                  },
                }}
              >
                {portfolios.map((link) => (
                  <MenuItem
                    key={link._id}
                    onClick={() => {
                      navigate(`/portfolio/${link._id}`);
                      handleMenuClose();
                    }}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#1f1f1f", // Change color on hover
                      },
                      color: "#ffffff", // Text color
                      padding: "10px 20px", // Padding inside menu item
                      borderRadius: "10px", // Item border radius
                    }}
                  >
                    {link.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )
        )}

        <Action />
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
          {navLinks.map((nav, index) =>
            nav.name !== "Portfolio" ? (
              <Link
                style={{ color: "#fff", cursor: "pointer" }}
                to={nav?.to}
                smooth={true}
                duration={500}
                key={index}
              >
                <Box
                  display="flex"
                  sx={{
                    borderBottom:
                      location.pathname === nav.to
                        ? "2px solid #2DDB81"
                        : "none",
                  }}
                >
                  {nav?.name}
                  {nav?.image && <Box component="img" src={nav?.image} />}
                </Box>
              </Link>
            ) : (
              <Box key={index} sx={{ color: "#fff", cursor: "pointer" }}>
                <Box
                  display="flex"
                  sx={{
                    borderBottom: location.pathname.startsWith("/portfolio")
                      ? "2px solid #2DDB81"
                      : "none",
                  }}
                  onClick={handleMenuClick}
                >
                  {nav?.name}
                  {nav?.image && <Box component="img" src={nav?.image} />}
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {portfolios.map((link) => (
                    <MenuItem
                      key={link._id}
                      onClick={() => {
                        navigate(`/portfolio/${link._id}`);
                        handleMenuClose();
                      }}
                    >
                      {link.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )
          )}
        </Stack>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
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
