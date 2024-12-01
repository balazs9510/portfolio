import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./colors";

const createAppTheme = (mode: "light" | "dark" = "light") => {
  const palette = mode === "light" ? lightPalette : darkPalette;
  return createTheme({
    palette: {
      primary: { main: palette.primary },
      secondary: { main: palette.secondary },
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
  });
};
export default createAppTheme;
