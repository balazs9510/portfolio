import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import { Trans } from "react-i18next";
import { getRandomColor } from "../../config/theme/colors";
import FadeIn from "../FadeIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AboutSectionStep = {
  title: string;
  dateRange?: string;
  description: string;
  tags?: string[];
};

export type AboutSectionProps = {
  title: string;
  steps: AboutSectionStep[];
  icon?: JSX.Element;
};

const EmptyDot = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: `3px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
}));

const RangeDateText = styled(Typography)({
  fontStyle: "italic",
  fontSize: "1rem",
  marginBottom: ".5rem",
});

const StyledChip = styled(Chip)(({ theme: { palette } }) => ({
  marginTop: 5,
  marginRight: 5,
  backgroundColor: getRandomColor(),
  color: palette.primary.main,
  "&:hover": {
    backgroundColor: palette.primary.dark,
    color: "white",
  },
}));

const AboutSection = ({ title, icon, steps }: AboutSectionProps) => {
  return (
    <>
      <Accordion
        defaultExpanded
        sx={{
          "&.MuiPaper-root": {
            background: "unset",
            boxShadow: "unset",
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h2" fontSize="2rem" pr={1}>
              {title}
            </Typography>
            {icon}
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stepper orientation="vertical" nonLinear sx={{ mb: 6 }}>
            {steps.map((step, index) => (
              <FadeIn delay={index * 0.15}>
                <Step active key={step.title}>
                  <StepLabel icon={<EmptyDot />}>{step.title}</StepLabel>
                  <StepContent>
                    {step.dateRange && (
                      <RangeDateText>{step.dateRange}</RangeDateText>
                    )}
                    <Typography>
                      <Trans
                        i18nKey={step.description}
                        components={{ li: <li />, b: <strong />, ul: <ul /> }}
                      />
                    </Typography>
                    {step.tags &&
                      step.tags.map((t) => <StyledChip label={t} />)}
                  </StepContent>
                </Step>
              </FadeIn>
            ))}
          </Stepper>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutSection;
