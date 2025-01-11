import {
  Box,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Project } from "./ProjectCards";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export type ProjectDrawerProps = {
  selectedProject?: Project;
  close: () => void;
};

const ProjectDrawer = ({ selectedProject, close }: ProjectDrawerProps) => {
  const { t } = useTranslation();
  return (
    <Drawer
      anchor="right"
      open={!!selectedProject}
      onClose={close}
      PaperProps={{
        sx: { width: { xs: "100%", sm: "700px" }, p: 2 },
      }}
      transitionDuration={200}
    >
      {selectedProject && (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h2" fontSize="2rem">
              {selectedProject.title}
            </Typography>
            <IconButton onClick={close}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            component="img"
            src={selectedProject.gif ?? selectedProject.image}
            alt={`${selectedProject.title} demo`}
            sx={{
              width: "100%",
              borderRadius: 1,
              boxShadow: 1,
            }}
          />
          <Typography variant="body1" mt={2}>
            {selectedProject.descritpion}
          </Typography>
          {selectedProject.keyFeatures &&
            selectedProject.keyFeatures?.length > 0 && (
              <Stack mt={2}>
                <Typography variant="h3" fontSize="1.5rem">
                  {t("projects.keyFeatures")}
                </Typography>
                <List>
                  {selectedProject.keyFeatures.map(({ title, desc }, index) => (
                    <ListItem key={index}>
                      <Typography>
                        <b>{title}</b>: {desc}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            )}
          <Stack mt={2} spacing={1}>
            <Typography variant="body1">
              Website:{" "}
              <NavLink to={selectedProject.siteUrl} target="_blank">
                {selectedProject.siteUrl}
              </NavLink>
            </Typography>
            <Typography variant="body1">
              Github:{" "}
              <NavLink to={selectedProject.githubUrl} target="_blank">
                {selectedProject.githubUrl}
              </NavLink>
            </Typography>
          </Stack>
          <Stack mt={2} spacing={1}>
            <Typography variant="body1">{t("projects.techStack")}:</Typography>
            <Stack flexDirection="row" gap={1}>
              {selectedProject.techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="medium"
                  sx={{ bgcolor: "primary.light", color: "white" }}
                />
              ))}
            </Stack>
          </Stack>
        </>
      )}
    </Drawer>
  );
};

export default ProjectDrawer;
