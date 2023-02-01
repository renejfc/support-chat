import type { ISession } from '~/types/auth.interface'

export const useAuthStore = defineStore('auth', () => {
  const baseUrl = '/api'
  const sessionId = useCookie<string | null>('session_id', { maxAge: 3600, default: () => null, sameSite: 'lax' })
  const isLoggedIn = computed(() => !!sessionId.value)

  async function login({ username, password }: ISession) {
    try {
      const { session_id } = await $fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: { username, password },
      })

      sessionId.value = session_id
    }
    catch (error) {
      console.error(error)
    }
  }

  function logout() {
    sessionId.value = null
  }

  return { login, logout, isLoggedIn }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
