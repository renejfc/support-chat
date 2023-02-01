export interface ISession {
  username: string | null
  password: string | null
}

export interface ISessionResponse {
  session_id: string
}

export interface IAuthError {
  code: number | null
  message: string | null
}
