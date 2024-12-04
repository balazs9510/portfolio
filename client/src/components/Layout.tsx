import { Stack } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer";

type LayoutProps = {
  children: JSX.Element;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack height="100%" width="100%">
      <Header />
      <Stack component="main" flexGrow="1" padding={6}>
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Layout;
