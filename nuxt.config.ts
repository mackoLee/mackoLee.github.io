// https://nuxt.com/docs/api/configuration/nuxt-config
import '@nuxt/ui'
import vitePluginRequire from "vite-plugin-require";

export default defineNuxtConfig({
    vite: {
        optimizeDeps: {disabled: false},
        plugins: [
            vitePluginRequire()
        ],
        build: {
            commonjsOptions: {
                include: []
            }
        }
    },
    runtimeConfig: {
        public: {
            GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
            SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
        }
    },
    imports: {
        dirs: [
            // Scan all-level modules
            'composables/**',
        ]
    },
    devtools: {enabled: true},
    ssr: false,

    app: {
        cdnURL: 'https://mackolee.github.io/',
        buildAssetsDir: './',
    },
    dir: {
        public: 'public',
    },
    css: ['~/assets/styles/main.css'],

    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/i18n',
        'nuxt-icon',
        '@nuxt/ui',
        'nuxt-lodash',
        '@pinia/nuxt',
        'dayjs-nuxt'
    ],
    plugins: [
        {src: 'plugins/googleapis'},
    ],
    eslint: {},
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"],
        alias: [
            ["camelCase", "stringToCamelCase"], // => stringToCamelCase
            ["kebabCase", "stringToKebab"], // => stringToKebab
            ["isDate", "isLodashDate"], // => _isLodashDate
        ],
    },
    i18n: {
        strategy: 'prefix_and_default',
        defaultLocale: 'ko',
        vueI18n: './i18n.config.ts',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
            },
            {
                code: 'ko',
                iso: 'ko-KR',
            },
            {
                code: 'ja',
                iso: 'ja-JP'
            }
        ]
    },
    dayjs: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko',
        defaultTimeZone: 'Asia/Seoul',
        plugins: [
            'utc',
            'timezone',
            'updateLocale',
        ]

    }

});
