// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/medicalApp/",
//   plugins: [react()],
// });
// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The base path MUST match your GitHub repository name exactly.
export default defineConfig({
  base: "/medical-registry/", // <--- CHANGED FROM /medicalApp/
  plugins: [react()],
});
