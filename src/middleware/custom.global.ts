export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()

  if (to.path !== '/auth/login' && to.path !== '/chat') {
    switch (auth.isLoggedIn) {
      case true:
        return navigateTo('/chat')
      case false:
        return navigateTo('/auth/login')
    }
  }
})
