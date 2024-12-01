import { Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      <LanguageSwitcher></LanguageSwitcher>
      <Typography variant="h2" gutterBottom>
        {t("home.welcome")}
      </Typography>
      <Typography variant="h5" paragraph>
        Senior Software Developer specializing in C#, AWS, and React.
      </Typography>
      <Button component={Link} to="/about" variant="contained" sx={{ m: 1 }}>
        About Me
      </Button>
      <Button component={Link} to="/projects" variant="outlined" sx={{ m: 1 }}>
        My Projects
      </Button>
      <Button
        component={Link}
        to="/contact"
        variant="contained"
        color="secondary"
        sx={{ m: 1 }}
      >
        Contact Me
      </Button>
    </Container>
  );
};

export default Home;
