import type { ISession, ISessionResponse } from '~/types/auth.interface'

export const useAuthStore = defineStore('auth', () => {
  const baseUrl = useRuntimeConfig().public.apiBaseUrl
  const router = useRouter()

  const sessionId = useCookie<string | null>('session_id', { maxAge: 3600, default: () => null, sameSite: 'lax' })
  const isLoggedIn = computed(() => !!sessionId.value)

  async function login({ username, password }: ISession) {
      const { data, error } = await useFetch<ISessionResponse>(`${baseUrl}/login`, {
        method: 'POST',
        body: { username, password },
      })

      if(error.value) {
        console.error(error.value.message)
        return
      }

      sessionId.value = data.value!.session_id
      router.push({ path: '/chat' })
  }

  function logout() {
    sessionId.value = null
    router.push({ path: '/auth/login' })
  }

  return { login, logout, isLoggedIn }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
