import { AboutSectionProps } from "../AboutSection";
import AssignmentIcon from '@mui/icons-material/Assignment';
const skills = (t: (key: string) => string): AboutSectionProps => {
  return {
    title: t("about.skills.title"),
    icon: <AssignmentIcon sx={{ fontSize: "2rem" }} />,
  };
};

export default skills;
