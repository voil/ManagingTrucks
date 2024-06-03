// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  debug: !!process.env.APP_DEBUG,
  devtools: {
    enabled: !!process.env.APP_DEVTOOLS
  },
  vite: {
    plugins: [
      svgLoader(),
      Components({
        resolvers: [
          PrimeVueResolver()
        ]
      })
    ],
    test: {
      globals: true,
      environment: 'happy-dom',
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
      }
    ]
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: './assets/i18n',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        file: 'en'
      }
    ]
  },
  primevue: {
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css', 'primeicons/primeicons.css'],
  appConfig: {
    api: {
      url: 'http://qa-api-mock-3.eu-central-1.elasticbeanstalk.com'
    },
    list: {
      default: 10,
      limits: [10, 20, 30]
    }
  },
})
