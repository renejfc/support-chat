import { useAuthStore } from '~/stores/auth.store'

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()

  if (to.path !== '/auth/login' && !auth.isLoggedIn)
    return navigateTo({ path: '/auth/login' })

  if (to.path === '/auth/login' && auth.isLoggedIn)
    return navigateTo({ path: '/chat' })
})
