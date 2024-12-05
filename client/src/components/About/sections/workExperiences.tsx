import { AboutSectionProps } from "../AboutSection";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const workExperiences = (t: (key: string) => string): AboutSectionProps => {
  return {
    title: t("about.experiences.title"),
    icon: <WorkOutlineIcon sx={{ fontSize: "2rem" }} />,
    steps: ["diligent", /*"civilTolna",*/ "agco", "png"].map((key) => ({
      title: t(`about.experiences.${key}.title`),
      dateRange: t(`about.experiences.${key}.dateRange`),
      description: `about.experiences.${key}.description`,
      tags: t(`about.experiences.${key}.tags`).split(","),
    })),
  };
};

export default workExperiences;
