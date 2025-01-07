import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import createAppTheme from "./config/theme/theme";
import Layout from "./components/Layout";
import About from "./components/About/About";

function App() {
  const theme = createAppTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* basename is set for matching the GH pages */}
      <BrowserRouter basename="/portfolio">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
