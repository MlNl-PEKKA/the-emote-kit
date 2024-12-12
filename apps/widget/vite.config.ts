import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { EMOTE_KIT_WIDGET } from "@repo/utils";

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "widget",
      fileName: (format) =>
        `${"emote-kit-widget" satisfies typeof EMOTE_KIT_WIDGET}.${format}.js`,
    },
    target: "esnext",
  },
});
