import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), dts(), tailwindcss(), svgLoader()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VuePageTiles",
      fileName: "vue-page-tiles",
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
