import { Box, Card, CardMedia, Chip, Stack, Typography } from "@mui/material";

export type Project = {
  title: string;
  shortDescription: string;
  descritpion: string;
  techStack: string[];
  image: string;
  gif?: string;
  keyFeatures?: { title: string; desc: string }[];
  siteUrl: string;
  githubUrl: string;
};

export type ProjectCardProps = {
  project: Project;
  openDrawer: (project: Project) => void;
};
const ProjectCard = ({ project, openDrawer }: ProjectCardProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        height: 400,
        borderRadius: 2,
        boxShadow: 3,
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => openDrawer(project)}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "70%",
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          color: "white",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body2" gutterBottom>
          {project.shortDescription}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
          {project.techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.3)",
                color: "white",
                fontWeight: "bold",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default ProjectCard;
