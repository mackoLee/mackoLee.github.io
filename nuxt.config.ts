// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,

	app: {
		cdnURL: 'https://mackolee.github.io/',
		buildAssetsDir: './',
	},
	dir: {
		public: 'public',
	},
	css: ['~/assets/styles/main.css'],

	modules: ['@nuxtjs/eslint-module', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/i18n', 'nuxt-icon', '@nuxt/ui'],

	eslint: {},



	pinia: {
		/* pinia options */
		autoImports: ['defineStore'],
	},

});
