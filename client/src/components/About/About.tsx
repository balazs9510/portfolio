import { Typography } from "@mui/material";
import AboutSection from "./AboutSection";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const steps = ["diligent", "civilTolna", "agco", "png"].map((key) => ({
    title: t(`about.experiences.${key}.title`),
    dateRange: t(`about.experiences.${key}.dateRange`),
    description: `about.experiences.${key}.description`,
    tags: t(`about.experiences.${key}.tags`).split(","),
  }));

  return (
    <>
      <Typography variant="h1" mb={6}>
        About me
      </Typography>

      <AboutSection title={t("about.experiences.title")} steps={steps} />
    </>
  );
};

export default About;
