import { Stack, useMediaQuery, useTheme } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderDrawer from "./HeaderDrawer";
const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is mobile

  return (
    <Stack
      component="header"
      direction="row"
      padding={2}
      justifyContent="space-between"
    >
      <NavLink to="/">
        <RocketLaunchIcon sx={{ fontSize: "2.5rem" }} />
      </NavLink>
      {!isMobile && (
        <Stack component="nav" direction="row" gap={3} alignItems="center">
          <NavLink to="/about">{t("header.about")}</NavLink>
          <NavLink to="/projects">{t("header.projects")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>
        </Stack>
      )}

      {isMobile && <HeaderDrawer />}
    </Stack>
  );
};

export default Header;
