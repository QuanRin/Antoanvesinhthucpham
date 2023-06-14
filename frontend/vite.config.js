import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [react()],
  root: "src",
  resolve: {
    alias: {
      "~components": path.resolve(__dirname, "./src/components/index.js"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
      "~pages": path.resolve(__dirname, "./src/pages"),
      "~utils": path.resolve(__dirname, "./src/utils"),
      "~service": path.resolve(__dirname, "./src/service"),
      "~store": path.resolve(__dirname, "./src/store"),
      "~config": path.resolve(__dirname, "./src/config"),
      "~hoc": path.resolve(__dirname, "./src/hoc"),
    },
  },
});
