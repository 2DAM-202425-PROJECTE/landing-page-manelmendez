import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/landing-page-manelmendez/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'login/login.html'),
            },
        },
    },
})