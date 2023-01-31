export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/auth/login' && to.path !== '/chat')
    return navigateTo('/auth/login')
})
