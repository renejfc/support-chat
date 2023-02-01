import type { H3Event } from 'h3'
import { v4 as uuidv4 } from 'uuid'
import type { ISession } from '~~/src/types/auth.interface'

export default eventHandler(async (event: H3Event) => {
  const { username, password } = await readBody<ISession>(event)

  if (username === null || password === null) {
    sendError(event, createError({ statusCode: 400 }))
    return
  }

  if (!isValidBypassUser(username, password))
    sendError(event, createError({ statusCode: 401 }))

  return { session_id: generateToken() }
})

function isValidBypassUser(username: string, password: string) {
  const bypassUserList = [{
    username: 'admin',
    password: 'admin',
  }]

  return bypassUserList.some(user => user.username === username && user.password === password)
}

function generateToken() {
  return uuidv4().replaceAll('-', '')
}
