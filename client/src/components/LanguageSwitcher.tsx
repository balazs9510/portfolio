import { useTranslation } from "react-i18next";
import { DE, FR, HU, JP, SE, US } from "country-flag-icons/react/1x1";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import useTr from "../hooks/useTr";

function LanguageSwitcher() {
  const { tr } = useTr();
  const LANGUAGES = [
    { code: "en", label: tr.languages.english, flag: <US /> },
    { code: "hu", label: tr.languages.hungarian, flag: <HU /> },
    { code: "jp", label: tr.languages.japanense, flag: <JP /> },
    { code: "de", label: tr.languages.german, flag: <DE /> },
    { code: "fr", label: tr.languages.french, flag: <FR /> },
    { code: "se", label: tr.languages.swedish, flag: <SE /> },
  ];
  const { i18n } = useTranslation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    handleClose();
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;
  const flag = LANGUAGES.find((lang) => lang.code === currentLang)!.flag;
  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Avatar
          sx={{
            width: 30,
            height: 30,
            border: `2px solid ${theme.palette.primary.main}`, // Blue border for accent
            backgroundColor: "#f3f3f3",
            fontSize: "1.5rem",
            color: "#000",
            fontWeight: "bold",
            boxShadow: "inset 0px 0px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          {flag}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {LANGUAGES.filter((lang) => lang.code !== currentLang).map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ width: 30, height: 30 }}>
                {lang.flag ?? lang.flag}
              </Avatar>
              {lang.label}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default LanguageSwitcher;
