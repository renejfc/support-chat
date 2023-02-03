import type { H3Event } from 'h3'
import type { IBotMessageResponse } from '~/types/chat.interface'

export default eventHandler((event: H3Event) => {
  const authHeader = getHeader(event, 'Authorization')
  const customResponse: IBotMessageResponse = {
    response: [
      {
        type: 'text',
        text: 'Hello, world!',
      }],
  }

  if (authHeader?.startsWith('Bearer '))
    return customResponse
})
