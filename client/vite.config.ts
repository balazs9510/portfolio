import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/", // Used for GH Pages
  plugins: [react()],
});
