import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Reemplaza "nombre-del-repo" con el nombre real de tu repositorio
});
