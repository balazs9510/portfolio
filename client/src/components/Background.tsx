import { Box } from "@mui/material";

const Background = ({
  mode,
  children,
}: {
  mode: "dark" | "light";
  children: React.ReactNode;
}) => {
  const bgUrl = mode === "light" ? "./portfolio/light_bg.svg" : "./portfolio/night_bg.svg";

  return (
    <Box
      sx={{
        backgroundImage: `url("${bgUrl}")`,
        backgroundSize: "300px",
        height: "100%",
        overflow: "auto",
      }}
    >
      {children}{" "}
    </Box>
  );
};

export default Background;
