import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes it listen on your local IP
    port: 5177, // Or any port you want
  },
});
