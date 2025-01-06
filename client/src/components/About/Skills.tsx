import { Box, Chip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const advancedSkills = t("about.skills.advanced.skills").split(",");
  const intermediateSkills = t("about.skills.intermediate.skills").split(",");
  const beginnerSkills = t("about.skills.beginner.skills").split(",");
  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h6" color="textSecondary">
          {t("about.skills.advanced.title")}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {advancedSkills.map((skill) => (
            <Chip key={skill} label={skill} color="primary" />
          ))}
        </Box>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" color="textSecondary">
          {t("about.skills.intermediate.title")}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {intermediateSkills.map((skill) => (
            <Chip key={skill} label={skill} color="secondary" />
          ))}
        </Box>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" color="textSecondary">
          {t("about.skills.beginner.title")}
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {beginnerSkills.map((skill) => (
            <Chip key={skill} label={skill} color="default" />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
