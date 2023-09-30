// https://nuxt.com/docs/api/configuration/nuxt-config
import '@nuxt/ui'

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
            SPREAD_SHEET_ID: process.env.SPREAD_SHEET_ID,
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
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

    modules: ['@nuxtjs/eslint-module', '@nuxtjs/i18n', 'nuxt-icon', '@nuxt/ui', 'nuxt-lodash'],
    plugins: [
        {src: 'plugins/googleapis'}
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
});
