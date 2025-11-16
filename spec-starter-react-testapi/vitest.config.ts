import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: false, // Use explicit imports instead of globals
    environment: "node",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

