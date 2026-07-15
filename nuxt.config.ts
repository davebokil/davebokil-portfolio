export default defineNuxtConfig({
  compatibilityDate: '2026-07-14',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-K4VMC162N6',
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-K4VMC162N6');`,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://davebokil.com',
    },
  },
})
