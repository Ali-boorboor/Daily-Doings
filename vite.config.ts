import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  resolve: {
    alias: {
      "@": "/src",
      "@a": "/src/components/atoms",
      "@m": "/src/components/molecules",
      "@o": "/src/components/organisms",
      "@t": "/src/components/templates",
      "@type": "/src/types",
      "@st": "/src/stores",
    },
  },
});
