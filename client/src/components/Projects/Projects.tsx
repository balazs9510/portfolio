import { Box, Grid2, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProjectCard, { Project } from "./ProjectCards";
import { useState } from "react";
import ProjectDrawer from "./ProjectDrawer";

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();

  const projects: Project[] = [
    {
      key: "bosz",
      image: "./portfolio/bosz_logo.png",
      gif: "./portfolio/bosz_vid.gif",
      githubUrl: "https://github.com/balazs9510/bosz",
      siteUrl: "https://bonyhadi-oregdiak-szov-prod.web.app/",
      techStack: ["Angular", "TypeScript", "Bootstrap", "Firebase"],
    },
    {
      key: "civilTolna",
      image: "./portfolio/civil_tolna_logo.png",
      gif: "./portfolio/civil_tolna_vid.gif",
      githubUrl: "https://github.com/balazs9510/civiltolna",
      siteUrl: "https://civiltolna.hu",
      techStack: ["Angular", "TypeScript", "Bootstrap", "Firebase"],
    },
    {
      key: "tictactoe",
      image: "./portfolio/tictactoe_vid.gif",
      gif: "./portfolio/tictactoe_vid.gif",
      githubUrl: "https://github.com/balazs9510/angular-tictactoe",
      siteUrl: "https://balazs9510.github.io/angular-tictactoe/",
      techStack: ["Angular"],
    },
    {
      key: "spockup",
      image: "./portfolio/spockup_vid.gif",
      gif: "./portfolio/spockup_vid.gif",
      githubUrl: "https://github.com/balazs9510/spockup",
      siteUrl: "-",
      techStack: ["React", "Firebase", "Spotify API"],
    },
  ]
    .reverse()
    .map((p) => {
      const prop = (key: string) => t(`projects.${p.key}.${key}`);
      return {
        ...p,
        title: prop("title"),
        descritpion: prop("description"),
        shortDescription: prop("shortDescription"),
        keyFeatures: (
          t(`projects.${p.key}.keyFeatures`, {
            returnObjects: true,
          }) as { title: string; desc: string }[]
        ).map(({ title, desc }) => {
          return { title, desc };
        }),
      };
    });

  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        {t("projects.title")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        {t("projects.intro")}
      </Typography>
      <Grid2 container spacing={4}>
        {projects.map((project, index) => (
          <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
            <ProjectCard
              key={index}
              project={project}
              openDrawer={() => {
                setSelectedProject(project);
              }}
            />
          </Grid2>
        ))}
      </Grid2>
      {/* <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={2}
        p={2}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            openDrawer={() => {
              setSelectedProject(project);
            }}
          />
        ))}
      </Box> */}
      <ProjectDrawer
        selectedProject={selectedProject}
        close={() => setSelectedProject(undefined)}
      />
    </Box>
  );
};

export default Projects;
