import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type AboutSectionProps = {
  title: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  expanded?: boolean;
};

const AboutSection = ({
  title,
  icon,
  children,
  expanded,
}: AboutSectionProps) => {
  return (
    <>
      <Accordion
        defaultExpanded
        expanded={expanded}
        sx={{
          "&.MuiPaper-root": {
            background: "unset",
            boxShadow: "unset",
          },
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? undefined : <ExpandMoreIcon color="primary" />}
        >
          <Stack direction="row" alignItems="center">
            <Typography variant="h2" fontSize="2rem" pr={1}>
              {title}
            </Typography>
            {icon}
          </Stack>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default AboutSection;
