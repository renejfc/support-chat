// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '~/styles/tokens/_colors.css',
    '~/styles/tokens/_typography.css',
    '~/styles/_global.css',
  ],
  modules: [
    '@pinia/nuxt',
  ],
})
