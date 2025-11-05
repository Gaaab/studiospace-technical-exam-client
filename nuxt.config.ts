import { fileURLToPath, URL } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/test-utils',
  ],

  css: ['~/assets/scss/main.scss'],

  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./app/', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})
