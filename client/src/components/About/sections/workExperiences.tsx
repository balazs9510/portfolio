import { AboutSectionProps } from "../AboutSection";
import { AboutSectionStepperProps } from "../AboutSectionStepper";
import WorkIcon from "@mui/icons-material/Work";

const workExperiences = (t: (key: string) => string): AboutSectionProps => {
  return {
    title: t("about.experiences.title"),
    icon: <WorkIcon sx={{ fontSize: "2rem" }} />,
  };
};

export const workExperiencesSteps = (
  t: (key: string) => string
): AboutSectionStepperProps => {
  return {
    steps: ["diligent", /*"civilTolna",*/ "agco", "png"].map((key) => ({
      title: t(`about.experiences.${key}.title`),
      dateRange: t(`about.experiences.${key}.dateRange`),
      description: `about.experiences.${key}.description`,
      tags: t(`about.experiences.${key}.tags`).split(","),
    })),
  };
};
export default workExperiences;
