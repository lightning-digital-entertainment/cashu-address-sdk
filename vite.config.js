import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ include: ["src"] })],
  build: {
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/main.ts"),
    },
  },
});
