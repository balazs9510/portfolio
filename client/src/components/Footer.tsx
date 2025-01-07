import { IconButton, Stack, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook"; // Import your icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import StyledNavLink from "./StyledNavLink";

type Contact = {
  url: string;
  icon: React.ElementType;
};

const contacts: Contact[] = [
  { url: "https://www.facebook.com/balazs.berta1/", icon: FacebookIcon },
  {
    url: "https://www.linkedin.com/in/bal%C3%A1zs-berta-7b1756148/",
    icon: LinkedInIcon,
  },
  {
    url: "https://github.com/balazs9510",
    icon: GitHub,
  },
];

const Footer = () => {
  const { palette } = useTheme();

  return (
    <Stack
      component="footer"
      direction="row"
      gap={10}
      justifyContent="center"
      padding="1rem"
    >
      {contacts.map((contact, index) => (
        <StyledNavLink
          to={contact.url}
          key={index}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton>
            <contact.icon
              sx={{
                fontSize: "2rem",
                "&:hover": { color: palette.primary.dark },
              }}
            />
          </IconButton>
        </StyledNavLink>
      ))}
    </Stack>
  );
};

export default Footer;
