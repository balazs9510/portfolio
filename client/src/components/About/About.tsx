import { Box, Typography } from "@mui/material";
import AboutSection from "./AboutSection";
import { useTranslation } from "react-i18next";
import workExperiences, {
  workExperiencesSteps,
} from "./sections/workExperiences";
import education, { educationSteps } from "./sections/education";
import certifications, { certificationsSteps } from "./sections/certifications";
import Skills from "./Skills";
import AboutSectionStepper from "./AboutSectionStepper";
import skills from "./sections/skill";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const About = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h1" mb={6}>
        {t("about.title")}
      </Typography>

      <AboutSection
        key="mission"
        title={t("about.mission.title")}
        icon={<RocketLaunchIcon />}
        expanded={true}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: "1.5rem", fontStyle: "italic" }}
        >
          {t("about.mission.description")}
        </Typography>
      </AboutSection>
      <AboutSection {...skills(t)}>
        <Skills />
      </AboutSection>
      <AboutSection {...workExperiences(t)}>
        <AboutSectionStepper {...workExperiencesSteps(t)} />
      </AboutSection>
      <AboutSection {...education(t)}>
        <AboutSectionStepper {...educationSteps(t)} />
      </AboutSection>
      <AboutSection {...certifications(t)}>
        <AboutSectionStepper {...certificationsSteps(t)} />
      </AboutSection>
    </Box>
  );
};

export default About;
