import { IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useTranslation } from "react-i18next";
import HeaderDrawer from "./HeaderDrawer";
import StyledNavLink from "../StyledNavLink";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LanguageSwitcher from "../LanguageSwitcher";

type HeaderProps = {
  nightMode: boolean;
  setNightMode: (isSet: boolean) => void;
};
const Header = ({ nightMode, setNightMode }: HeaderProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is mobile

  const onModeClick = () => {
    setNightMode(!nightMode);
  };
  return (
    <Stack
      component="header"
      direction="row"
      padding={2}
      justifyContent="space-between"
      marginBottom={2}
    >
      <StyledNavLink to="/">
        <RocketLaunchIcon sx={{ fontSize: "2.5rem" }} />
      </StyledNavLink>
      {!isMobile && (
        <Stack component="nav" direction="row" gap={3} alignItems="center">
          <StyledNavLink to="/about">{t("header.about")}</StyledNavLink>
          <StyledNavLink to="/projects">{t("header.projects")}</StyledNavLink>
          <StyledNavLink to="/contact">{t("header.contact")}</StyledNavLink>
          <IconButton onClick={onModeClick}>
            {nightMode ? (
              <NightlightIcon color="primary" />
            ) : (
              <LightModeIcon color="primary" />
            )}
          </IconButton>
          <LanguageSwitcher />
        </Stack>
      )}

      {isMobile && <HeaderDrawer />}
    </Stack>
  );
};

export default Header;
