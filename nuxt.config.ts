import { channels } from './app/data/menu'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'description', content: 'Miamo, un fast-food fictif présenté comme un vrai site de commande en ligne.' },
        { name: 'theme-color', content: '#d62300' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/atelier',
        '/panier',
        '/infos',
        '/fidelite',
        '/offres',
        '/mentions-legales',
        '/cgv',
        '/confidentialite',
        ...channels.filter((c) => c.products).map((c) => c.to),
      ],
    },
  },
})
