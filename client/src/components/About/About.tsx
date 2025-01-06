import { Typography } from "@mui/material";
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

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h1" mb={6}>
        About me
      </Typography>

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
    </>
  );
};

export default About;
