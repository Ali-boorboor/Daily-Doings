import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 20000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@a": "/src/components/atoms",
      "@m": "/src/components/molecules",
      "@o": "/src/components/organisms",
      "@t": "/src/components/templates",
      "@v": "/src/validations",
      "@type": "/src/types",
      "@st": "/src/stores",
    },
  },
});
