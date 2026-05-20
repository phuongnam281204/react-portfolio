import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-portfolio/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  base: "/react-portfolio/",
});
