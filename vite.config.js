import path from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    logLevel: "info",
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src/"),
        "@core": path.resolve(__dirname, "./src/@core/"),
        views: path.resolve(__dirname, "./src/views/"),
      },
    },
  };
});
