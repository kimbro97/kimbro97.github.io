import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { cpa } from "./vite.plugins";
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'docs')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    plugins: [
        vue(),
        Pages({
            dirs: [
                { dir: resolve(__dirname, './src/views/client'), baseRoute: '' },
                { dir: resolve(__dirname, './src/views/console'), baseRoute: 'console' }
            ]
        }),
        cpa({
            pages: {
                index: {
                    filename: 'index.html',
                    entry: '/src/app-main.js',
                    template: '/src/index.html',
                },
                console: {
                    filename: 'console.html',
                    entry: '/src/console-main.js',
                    template: '/src/console.html',
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir, // 빌드되는 디렉토리 정의
        emptyOutDir: true
    },
})

// {
//     pages: {
//         index: {
//             filename: "index.html",
//                 entry
//         :
//             "/src/app-main.js",
//                 template
//         :
//             "/src/index.html",
//         }
//     ,
//         console: {
//             filename: "console.html",
//                 entry
//         :
//             "/src/console-main.js",
//                 template
//         :
//             "/src/console.html"
//         }
//     ,
//     }
// }
