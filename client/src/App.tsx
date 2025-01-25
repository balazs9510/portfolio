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
import Background from "./components/Background";

function App() {
  const nightModeKey = "NIGHT_MODE_KEY";
  const val = localStorage.getItem(nightModeKey) === "true";
  console.log(val);

  const [nightMode, setNightMode] = useState<boolean>(val);

  const mode = nightMode ? "dark" : "light";
  const theme = createAppTheme(mode);

  const setMode = (isSet: boolean) => {
    localStorage.setItem(nightModeKey, isSet ? "true" : "false");
    setNightMode(isSet);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Background mode={mode}>
          <CssBaseline />
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
        </Background>
      </ThemeProvider>
    </Box>
  );
}

export default App;
