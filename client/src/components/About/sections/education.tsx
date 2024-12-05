import { AboutSectionProps } from "../AboutSection";
import SchoolIcon from "@mui/icons-material/School";
const education = (t: (key: string) => string): AboutSectionProps => {
  return {
    title: t("about.education.title"),
    icon: <SchoolIcon sx={{ fontSize: "2rem" }} />,
    steps: ["bmeMsc"].map((key) => ({
      title: t(`about.education.${key}.title`),
      dateRange: t(`about.education.${key}.dateRange`),
      description: `about.education.${key}.description`,
      tags: t(`about.education.${key}.tags`).split(","),
    })),
  };
};

export default education;
