import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import postcss from "./postcss.config.js";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), dts(), svgLoader()],
  css: { postcss },
  build: {
    lib: {
      entry: {
        "vue-page-tiles": path.resolve(__dirname, "src/index.ts"),
        display: path.resolve(__dirname, "src/components/display/index.ts"),
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
