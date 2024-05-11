import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [svgr(), react()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: "./dist",
        assetsDir: "assets",
    },
    css: {
        modules: false,
    },
    // define: {
    //     "process.env": process.env,
    // },
    base: "/petlove",
});
