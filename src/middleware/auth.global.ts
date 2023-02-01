import { useAuthStore } from '~/stores/auth.store'

export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()

  if (to.name !== 'Login' && !auth.isLoggedIn)
    return navigateTo({ path: '/login' })

  if (to.name === 'Login' && auth.isLoggedIn)
    return navigateTo({ path: '/chat' })
})
