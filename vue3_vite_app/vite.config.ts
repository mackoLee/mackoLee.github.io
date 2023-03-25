import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        quasar({
            sassVariables: '@/style/quasar/variables.sass'
        }),
        Pages()
    ],
    resolve: {
        alias: {
            '@': '/src',
        }
    },
    build: {
      outDir: '../'
    }
})