import { Stack, Typography } from "@mui/material";

const Thanks = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
      <Typography variant="h1">Thank You for Reaching Out! 🥳</Typography>
      <Typography variant="body1">
        I’ve received your message and will get back to you soon.
      </Typography>
    </Stack>
  );
};

export default Thanks;
