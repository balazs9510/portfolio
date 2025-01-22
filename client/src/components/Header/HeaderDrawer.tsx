import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useTr from "../../hooks/useTr";
import StyledNavLink from "../StyledNavLink";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageSwitcher from "../LanguageSwitcher";

const HeaderDrawer = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu visibility
  const { tr } = useTr();

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={toggleMenu}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            width: "70%",
          },
        }}
      >
        <List sx={{ "& .MuiListItemIcon-root": { minWidth: "unset", mr: 2 } }}>
          <ListItem>
            <ListItemIcon>
              <LanguageSwitcher />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ContactPageIcon></ContactPageIcon>
            </ListItemIcon>
            <ListItemText>
              <StyledNavLink to="/about" sx={{ fontSize: "2rem" }}>
                {tr.header.about}
              </StyledNavLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LaptopWindowsIcon></LaptopWindowsIcon>
            </ListItemIcon>
            <ListItemText>
              <StyledNavLink to="/projects" sx={{ fontSize: "2rem" }}>
                {tr.header.projects}
              </StyledNavLink>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ fontSize: "2rem" }}>
              <AlternateEmailIcon></AlternateEmailIcon>
            </ListItemIcon>
            <ListItemText>
              <StyledNavLink to="/contact" sx={{ fontSize: "2rem" }}>
                {tr.header.contact}
              </StyledNavLink>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
