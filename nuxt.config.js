const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: 'universal',
    ...(!isDev && {
        modern: 'client'
    }),
  	// Global page headers (https://go.nuxtjs.dev/config-head)
  	head: {
		htmlAttrs: {lang: 'ru'},
		title: 'Матвей Мелишев' + ' – ' + 'MELISHEV',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Здесь, Матвей Мелишев, показывает всё чем он занимается.' },
			// ANDROID META TAGS
			{ name: 'theme-color', content: '#F0F0F0'},
			// OPEN GRAPH
			{ property: 'og:locale', content: 'ru_RU' },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:title', content: 'Матвей Мелишев' },
			{ property: 'og:site_name', content:'Матвей Мелишев' },
			{ property: 'og:description', content: 'Здесь, Матвей Мелишев, показывает всё чем он занимается.' },
			{ property: 'og:image', content: 'https://melishev.ru/favicon/favicon.png' },
			{ property: 'og:url', content: 'https://melishev.ru/' },
			// APPLE
			{ name: 'apple-mobile-web-app-title', content: 'Матвей Мелишев' }
		],
		link: [
			// FAVICON
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico', sizes: '32x32' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg', sizes: 'any' },
			{ rel: 'icon', type: 'image/png', href: '/favicon/favicon.png', sizes: '573x573' },
			// APPLE
			{ rel: 'apple-touch-icon', href: '/favicon/favicon-180.png', sizes: '180x180' },
			{ rel: 'apple-touch-icon', href: '/favicon/favicon-167.png', sizes: '167x167' },
			{ rel: 'apple-touch-icon', href: '/favicon/favicon-152.png', sizes: '152x152' },
			{ rel: 'apple-touch-icon', href: '/favicon/favicon.png' },
			{ rel: 'mask-icon', href: '/favicon/favicon.svg', color: '#F0F0F0' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
        // '~assets/styles/var.css',
        // '~assets/styles/global.css'
    ],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
        // '~plugins/vue-lazy-load',
        // '~plugins/jsonld',
        // '~plugins/moment'
    ],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	loading: false,

	telemetry: false,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'@nuxtjs/sitemap',
        '@nuxtjs/robots',
		['@nuxtjs/google-gtag', { id: 'G-S6ZE9XQ897' }]
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		splitChunks: {
            layouts: true,
            pages: true,
            commons: true
        },
		plugins: [
            new MomentLocalesPlugin({
                localesToKeep: ['es-us', 'ru'],
            }),
        ],
		extend (config, ctx) {
        }
  	},
	serverMiddleware: [
        '~/api/index.js'
    ]
}
