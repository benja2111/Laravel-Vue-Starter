import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
    plugins: [
        vue(),
        laravel(["resources/css/app.scss", "resources/js/app.js"]),
        eslint({
            fix: true,
            include: ["resources/js/**/*.{js,vue}"],
            extensions: ["js", "vue"],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("resources"),
        },
    },
});
