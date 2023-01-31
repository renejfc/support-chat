export const useUserStore = defineStore('user', () => {
  const username = ref(null)
  const token = ref(null)

  const isAuthenticated = computed(() => !!username.value)

  return { username, token, isAuthenticated }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
