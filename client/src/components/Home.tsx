import { Box, Stack, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Stack height="100%" justifyContent="center" mt={8}>
      <FadeIn>
        <Typography variant="h1" gutterBottom>
          {t("home.welcome")}
        </Typography>
      </FadeIn>
      <FadeIn delay={0.6}>
        <Typography variant="body1" gutterBottom>
          <Trans i18nKey="home.introduction.part1"></Trans>
        </Typography>
      </FadeIn>
      <FadeIn delay={1.2}>
        <Typography variant="body1">
          <Trans i18nKey="home.introduction.part2">
            I thrive on clean code, effective collaboration, and the constant
            pursuit of excellence. Outside of coding, I’m an avid learner,
            always exploring the latest tech trends and improving my craft.
            Let’s create something extraordinary together. Visit my
            <NavLink to="/about">About</NavLink> page to learn more about my
            journey, or feel free to get in touch—I’d love to hear from you!
          </Trans>
        </Typography>
      </FadeIn>
      <FadeIn delay={1.8}>
        <Box pt={2}>
          <NavLink to="/projects">
            See my projects{" "}
            <motion.div
              initial={{ x: 0, display: "inline-block" }}
              animate={{ x: 8 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ➔
            </motion.div>
          </NavLink>
        </Box>
      </FadeIn>
    </Stack>
  );
};

export default Home;
