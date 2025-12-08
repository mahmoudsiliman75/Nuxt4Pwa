export default defineNuxtConfig({
  // Runtime Configurations
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      mapApiKey: process.env.MAP_API_KEY,
    },
  },

  // Project Css & Scripts Files
  css: ['@/assets/css/main.css'],

  // Modules Registeration
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@vite-pwa/nuxt',
  ],

  // Modules Configurations
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.ts',
        dir: 'ltr',
      },
      {
        name: 'العربية',
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar.ts',
        dir: 'rtl',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
    },
  },

  ui: {
    prefix: '',
    theme: {
      colors: [
        'brand-basic',
        'brand-dark',
        'brand-light-1',
        'brand-light-2',
        'brand-light-3',
        'brand-light-4',
        'brand-secondary-basic',
        'brand-secondary-dark',
        'brand-secondary-light-1',
        'brand-secondary-light-2',
        'brand-secondary-light-3',
        'custom-black-50',
        'custom-black',
        'custom-gray-100',
        'custom-gray-200',
        'custom-gray-300',
        'custom-gray-400',
        'custom-gray-500',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
  },

  fonts: {
    families: [
      {
        name: 'NeoSansArabic Bold',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Bold.ttf',
        weight: '700',
        style: 'bold',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
      {
        name: 'NeoSansArabic Medium',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Medium.ttf',
        weight: '500',
        style: 'medium',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
      {
        name: 'NeoSansArabic Regular',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Regular.ttf',
        weight: '400',
        style: 'normal',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
      {
        name: 'NeoSansArabic Light',
        provider: 'local',
        src: '/fonts/NeoSansArabic-Light.ttf',
        weight: '300',
        style: 'light',
        display: 'swap',
        fallbacks: ['sans-serif'],
      },
    ],
  },

  colorMode: {
    preference: 'light',
  },

  image: {
    quality: 85,
    format: ['avif', 'webp'],
  },

  pwa: {
    strategies: 'injectManifest',
    srcDir: 'service-worker',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt PWA',
      short_name: 'NuxtPWA',
      description: 'Nuxt PWA Application',
      display: 'standalone',
      orientation: 'any',
      theme_color: '#016b53',
      background_color: '#e5fff8',
      icons: [
        {
          src: '/icon-72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/icon-96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/icon-128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: '/icon-256.png',
          sizes: '256x256',
          type: 'image/png', 
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => {
            return url.pathname.includes('/api')
          },
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'NUXT-PWA-APP-API-CACHE',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24,
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'NUXT-PWA-APP-IMAGE-CACHE',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 7 * 24 * 60 * 60,
            },
          },
        },
      ]
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
    },
  },

  // App Configurations
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],

      link: [
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
          crossorigin: 'use-credentials',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
      ],
    },

    rootId: 'nuxt_4_app_root',

    pageTransition: { name: 'fade', mode: 'out-in' },

    layoutTransition: { name: 'fade', mode: 'out-in' },
  },

  // General Configurations
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
})