// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxthq/ui'
  ],
  css: [
    '~/css/reset.scss',
    '~/css/global.scss',
  ],
  tailwindcss: {
    configPath: './tailwind.config.js'
  },
  devtools: { enabled: true }
})
