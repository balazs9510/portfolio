import {
  Box,
  Chip,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from "@mui/material";
import FadeIn from "../FadeIn";
import { Trans } from "react-i18next";
import { getRandomColor } from "../../config/theme/colors";

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

type AboutSectionStep = {
  title: string;
  dateRange?: string;
  description: string;
  tags?: string[];
};

export type AboutSectionStepperProps = {
  steps: AboutSectionStep[];
};

const AboutSectionStepper = ({ steps }: AboutSectionStepperProps) => {
  return (
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
                  components={{
                    li: <li />,
                    b: <strong />,
                    ul: <ul />,
                  }}
                />
              </Typography>
              {step.tags && step.tags.map((t) => <StyledChip label={t} />)}
            </StepContent>
          </Step>
        </FadeIn>
      ))}
    </Stepper>
  );
};

export default AboutSectionStepper;
