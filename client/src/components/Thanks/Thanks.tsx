import { Box, Stack, Typography } from "@mui/material";
import useTr from "../../hooks/useTr";
import StyledNavLink from "../StyledNavLink";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";

const Thanks = () => {
  const { tr } = useTr();

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
      <Typography variant="h1" textAlign={"center"} mb={4}>
        {tr.thanks.title}
      </Typography>
      <motion.div
        initial={{ transform: "scale(3)" }}
        animate={{ transform: "scale(3.5) rotate(-60deg)" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        🥳
      </motion.div>
      <Typography variant="body1" mt={2}>
        {tr.thanks.subtitle}
      </Typography>

      <Box mt={2}>
        <StyledNavLink
          to="/projects"
          sx={{ display: "flex", alignItems: "center" }}
        >
          {tr.thanks.cta}
          <ChevronRightIcon></ChevronRightIcon>
        </StyledNavLink>
      </Box>
    </Stack>
  );
};

export default Thanks;
