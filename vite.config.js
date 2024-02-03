import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    logLevel: "info",
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src/"),
        "@core": path.resolve(__dirname, "./src/@core/"),
      },
    },
  };
});
