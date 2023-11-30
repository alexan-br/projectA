// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      
    }
  },
  devtools: { 
    enabled: true 
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/apollo'
  ],
  runtimeConfig: {
    isProd: process.env.NETLIFY_ENV === 'production',
    datoToken: process.env.NUXT_DATO_TOKEN,
    public: {
      isProd: process.env.NETLIFY_ENV === 'production',
      datoToken : process.env.NUXT_DATO_TOKEN
    }
  },
  apollo: {
    clients: {
      default: './config/apollo.ts'
    }
  }
})
