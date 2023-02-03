import type { IAuthError, ISession, ISessionResponse } from '~/types/auth.interface'

export const useAuthStore = defineStore('auth', () => {
  const baseUrl = useRuntimeConfig().public.apiBaseUrl
  const router = useRouter()

  const sessionId = useCookie<string | null>('session_id', { maxAge: 3600, default: () => null, sameSite: 'lax' })
  const authError = reactive<IAuthError>({ code: null, message: null })
  const isLoggedIn = computed(() => !!sessionId.value)

  async function login({ username, password }: ISession) {
    const { data, error } = await useFetch<ISessionResponse>(`${baseUrl}/login`, {
      method: 'POST',
      body: { username, password },
    })

    if (error.value && error.value.statusCode) {
      switch (error.value.statusCode) {
        case 401:
          setAuthError(error.value.statusCode, 'Invalid username or password')
          return
        default:
          setAuthError(error.value.statusCode, 'An unknown error occurred')
          console.error(authError.message, error.value.statusCode)
          return
      }
    }

    authError.code && clearAuthError()
    sessionId.value = data.value!.session_id
    router.push({ path: '/chat' })
  }

  function logout() {
    sessionId.value = null
    router.push({ path: '/auth/login' })
  }

  function setAuthError(code: number, message: string) {
    authError.code = code
    authError.message = message
  }

  function clearAuthError() {
    authError.code = null
    authError.message = null
  }

  return { login, logout, isLoggedIn, authError, sessionId }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
