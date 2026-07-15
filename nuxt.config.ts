export default defineNuxtConfig({
  compatibilityDate: '2026-07-14',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://davebokil.com',
    },
  },
})
