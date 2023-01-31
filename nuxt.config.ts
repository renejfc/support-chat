// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '~/styles/tokens/_colors.css',
    '~/styles/tokens/_typography.css',
    '~/styles/_global.css',
  ],
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'useStore'],
      },
    ],
    'nuxt-icon',
  ],
})
