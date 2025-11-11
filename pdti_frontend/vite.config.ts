import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access from your VPS/public network
    port: 5173, // optional, change if needed
    allowedHosts: ["pdti-essemara.ma"], // add your domain here
  },
});
