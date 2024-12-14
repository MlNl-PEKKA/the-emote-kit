import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import type { EMOTE_KIT_WIDGET } from "@repo/constants";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": {
        NODE_ENV: "production",
        NEXT_PUBLIC_WEB_URL: env.NEXT_PUBLIC_WEB_URL,
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
  };
});
