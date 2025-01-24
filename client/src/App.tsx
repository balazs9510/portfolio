import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import createAppTheme from "./config/theme/theme";
import Layout from "./components/Layout";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Thanks from "./components/Thanks/Thanks";
import { useState } from "react";
import { darkPalette, lightPalette } from "./config/theme/colors";

function App() {
  const nightModeKey = "NIGHT_MODE_KEY";
  const val = localStorage.getItem(nightModeKey) === "true";
  console.log(val);

  const [nightMode, setNightMode] = useState<boolean>(val);

  const mode = nightMode ? "dark" : "light";
  const palette = mode === "light" ? lightPalette : darkPalette;
  const theme = createAppTheme(mode);
  const setMode = (isSet: boolean) => {
    localStorage.setItem(nightModeKey, isSet ? "true" : "false");
    setNightMode(isSet);
  };
  const bgUrl = mode === "light" ? "./light_bg.svg" : "./night_bg.svg";
  return (
    <Box sx={{ backgroundColor: palette.background, width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: `url("${bgUrl}")`,
            backgroundSize: "300px",
            height: "100%",
            overflow: "auto",
          }}
        >
          <CssBaseline />
          {/* basename is set for matching the GH pages */}
          <HashRouter>
            <Layout nightMode={nightMode} setNightMode={setMode}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thanks" element={<Thanks />} />
              </Routes>
            </Layout>
          </HashRouter>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
