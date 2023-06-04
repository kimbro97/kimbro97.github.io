import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

import { resolve } from 'path'

const outDir = resolve(__dirname, 'docs')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // Pages({
        //     dirs: [
        //         { dir: resolve(__dirname, './src/views/client'), baseRoute: '' }
        //     ]
        // }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir, // 빌드되는 디렉토리 정의
        emptyOutDir: true,
    },
})
