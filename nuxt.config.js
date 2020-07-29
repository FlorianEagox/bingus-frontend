// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
	mode: 'universal',
	target: 'server',
	components: true,
	telemetry: false,
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	css: [
	],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// '@nuxtjs/pwa',
		['nuxt-fontawesome', {
			imports: [
				{
					set: '@fortawesome/free-solid-svg-icons',
					icons: ['fas']
				}
			]
		}]
	],

	generate: {
		dir: '../server/public/'
	},
	server: {
		host: 'gabefrances.com',
		port: 6969
	}
};
