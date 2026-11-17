/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import path from "node:path";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    // Generates .d.ts (and .d.ts.map) files in dist for TypeScript support
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
      include: ["src"],
      exclude: [
        "**/*.test.tsx",
        "**/*.stories.tsx",
        "src/App.tsx",
        "src/main.tsx"
      ],
      // Lets "Go to Definition" jump to the real .tsx source
      compilerOptions: { declarationMap: true }
    })
  ],
  build: {
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
      formats: ["es"],
      fileName: "index",
      cssFileName: "style"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // Runs tests for the stories defined in your Storybook config
          storybookTest({
            configDir: path.join(dirname, ".storybook")
          })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }]
          }
        }
      }
    ]
  }
});
