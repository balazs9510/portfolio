import { AboutSectionProps } from "../AboutSection";
import { AboutSectionStepperProps } from "../AboutSectionStepper";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const certifications = (t: (key: string) => string): AboutSectionProps => {
  return {
    title: t("about.certifications.title"),
    icon: <VerifiedUserIcon sx={{ fontSize: "2rem" }} />,
  };
};

export const certificationsSteps = (
  t: (key: string) => string
): AboutSectionStepperProps => {
  return {
    steps: ["aws", "csharp"].map((key) => ({
      title: t(`about.certifications.${key}.title`),
      dateRange: t(`about.certifications.${key}.dateRange`),
      description: `about.certifications.${key}.description`,
      tags: t(`about.certifications.${key}.tags`).split(","),
    })),
  };
};

export default certifications;
