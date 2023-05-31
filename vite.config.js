import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir, // 빌드되는 디렉토리 정의
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(root, 'app-main.js'),
                console: resolve(root, 'console', 'console-main.js')
            }
        }
    },
})
