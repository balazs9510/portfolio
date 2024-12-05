import { Typography } from "@mui/material";
import AboutSection from "./AboutSection";
import { useTranslation } from "react-i18next";
import workExperiences from "./sections/workExperiences";
import education from "./sections/education";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1" mb={6}>
        About me
      </Typography>

      <AboutSection {...workExperiences(t)} />
      <AboutSection {...education(t)} />
    </>
  );
};

export default About;
