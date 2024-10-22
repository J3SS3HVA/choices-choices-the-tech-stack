// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/global.css'],
  // plugins: ['@/plugins/chart.js'],

 
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl', 
      },
      title: 'Accesdash Detail Pagina', 
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Dit is een voorbeeld van een toegankelijke Nuxt-applicatie.' }
      ]
    }
  }
});
