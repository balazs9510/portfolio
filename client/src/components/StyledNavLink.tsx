import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  "&.active": {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default StyledNavLink;
