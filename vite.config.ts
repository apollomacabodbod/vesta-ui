import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    // Generates .d.ts files in the dist folder for TypeScript support
    dts({
      insertTypesEntry: true,
      include: ["src"],
      // Exclude test files or stories if you have them
      exclude: ["**/*.test.tsx", "**/*.stories.tsx"]
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "style"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  }
});
