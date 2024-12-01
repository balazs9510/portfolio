import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"; // Close icon
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderDrawer = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu visibility

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
      {menuOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 20,
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.paper",
              padding: 3,
              borderRadius: 1,
              boxShadow: 3,
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Close Button */}
            <IconButton onClick={toggleMenu} sx={{ alignSelf: "flex-end" }}>
              <CloseIcon />
            </IconButton>

            {/* Mobile Navigation Links */}
            <NavLink
              to="/about"
              style={{ textDecoration: "none", margin: "1rem 0" }}
            >
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                About
              </Typography>
            </NavLink>
            <NavLink
              to="/projects"
              style={{ textDecoration: "none", margin: "1rem 0" }}
            >
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                Projects
              </Typography>
            </NavLink>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none", margin: "1rem 0" }}
            >
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                Contact
              </Typography>
            </NavLink>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HeaderDrawer;
