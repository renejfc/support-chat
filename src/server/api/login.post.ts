import type { H3Event } from 'h3'

function isValidBypassUser(username: string, password: string) {
  const list = [{
    username: 'admin',
    password: 'admin',
  }]

  return list.some(user => user.username === username && user.password === password)
}

export default eventHandler((event: H3Event) => {
  const { username, password, bypass } = readBody(event)

  if (username === null || password === null)
    sendError(event, createError({ statusCode: 401, message: 'Missing required data' }))

  if (bypass === true && isValidBypassUser(username, password))
    return {}

  return {
    statusCode: 200,
  }
})
