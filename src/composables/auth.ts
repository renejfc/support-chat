import type { ILogin, ILoginResponse } from '~/types/auth.types'

export const useAuth = () => {
  async function login({ username, password, bypass }: ILogin) {
    const { data, error } = await useFetch<ILoginResponse>('/login', {
      method: 'POST',
      body: { username, password, bypass },
    })

    if (error.value)
      console.error(error.value)

    localStorage.setItem('access_token', data.value?.token || '')
  }

  return { login }
}
