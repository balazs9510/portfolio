import { createTheme, PaletteMode } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./colors";

const createAppTheme = (mode: "light" | "dark" = "light") => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  const paletteMode: PaletteMode = mode === "light" ? "light" : "dark";
  return createTheme({
    palette: {
      mode: paletteMode, // Ensures MUI's built-in light/dark logic applies
      primary: { main: palette.primary },
      secondary: { main: palette.secondary },

      // text: {
      //   primary: palette.textPrimary,
      //   secondary: palette.textSecondary,
      // },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontSize: "4rem",
      },
      body1: {
        fontSize: "1.2rem",
      },
    },
    components: {
      MuiStepLabel: {
        styleOverrides: {
          label: {
            fontSize: "1.5rem",
          },
        },
      },
    },
  });
};
export default createAppTheme;
