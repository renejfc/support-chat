export interface ILogin {
  username: string | null
  password: string | null
  bypass: boolean
}

export const useAuth = () => {
  async function login({ username, password, bypass }: ILogin) {
    const { data, error } = await useFetch<string>('/login', {
      method: 'POST',
      body: { username, password, bypass },
    })

    localStorage.setItem('access_token', data.value || '')
  }

  return { login }
}
