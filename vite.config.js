import {defineConfig} from "vite";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";

export default defineConfig({
  base: "https://denardots.github.io/coffee-website/",
  plugins: [
    stylelintPlugin(),
    eslintPlugin({include: ["*.html"]})
  ]
});