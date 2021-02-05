import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';

export default async () => {
  return {
    head: {
      title: 'sylius-nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    css: [],

    plugins: ['~plugins/filters.js'],

    components: true,

    buildModules: ['@nuxtjs/tailwindcss'],

    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/pwa',
      'nuxt-i18n',
      '@nuxtjs/auth-next',
      '@nuxtjs/proxy'
    ],

    axios: {
      // baseURL: 'https://master.demo.sylius.com'
      proxy: true
    },

    pwa: {
      manifest: {
        lang: 'en'
      }
    },

    build: {},

    i18n: {
      locales: [{ code: 'en_US', name: 'en' }],
      defaultLocale: 'en_US',
      strategy: 'prefix',
      vueI18n: {
        fallbackLocale: 'en_US',
        messages: { en_US: en, de_DE: de, fr_FR: fr }
      }
    },

    auth: {
      strategies: {
        local: {
          token: {
            property: 'token'
          },
          user: {
            property: 'user'
          },
          endpoints: {
            login: {
              url: '/syliusapi/api/v2/shop/authentication-token',
              method: 'post'
            },
            logout: false,
            user: false
          }
        }
      },
      plugins: ['~/plugins/auth.js']
    },

    proxy: {
      '/syliusapi': {
        target: 'https://master.demo.sylius.com',
        pathRewrite: { '^/syliusapi': '' }
      }
    }
  };
};
