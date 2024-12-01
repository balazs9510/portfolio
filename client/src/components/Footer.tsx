import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook"; // Import your icons
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";

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
  return (
    <Stack component="footer" direction="row" gap={10} justifyContent="center" padding="1rem">
      {contacts.map((contact, index) => (
        <NavLink
          to={contact.url}
          key={index}
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <IconButton>
            <contact.icon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </NavLink>
      ))}
    </Stack>
  );
};

export default Footer;
