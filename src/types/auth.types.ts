export interface ILogin {
  username: string | null
  password: string | null
  bypass: boolean
}

export interface ILoginResponse {
  token: string
}
