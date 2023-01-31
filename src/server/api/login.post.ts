import type { H3Event } from 'h3'
import { v4 as uuidv4 } from 'uuid'
import type { ILogin } from '~~/src/types/auth.types'

export default eventHandler(async (event: H3Event) => {
  const { username, password, bypass } = await readBody<ILogin>(event)

  if (username === null || password === null) {
    sendError(event, createError({ statusCode: 401, message: 'Missing required data' }))
    return
  }

  if (bypass === true && isValidBypassUser(username, password)) {
    send(event, { token: generateToken() })
    return
  }

  send(event, { token: generateToken() })
})

function isValidBypassUser(username: string, password: string) {
  const list = [{
    username: 'admin',
    password: 'admin',
  }]

  return list.some(user => user.username === username && user.password === password)
}

function generateToken() {
  return uuidv4().replaceAll('-', '')
}
