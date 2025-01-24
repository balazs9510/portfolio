import { Stack } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer";

type LayoutProps = {
  children: JSX.Element;
  nightMode: boolean;
  setNightMode: (isSet: boolean) => void;
};
const Layout = ({ children, nightMode, setNightMode }: LayoutProps) => {
  return (
    <Stack height="100%" width="100%">
      <Header nightMode={nightMode} setNightMode={setNightMode} />
      <Stack
        component="main"
        flexGrow="1"
        padding="2rem"
        sx={{ maxWidth: "1500px", margin: "auto" }}
      >
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Layout;
