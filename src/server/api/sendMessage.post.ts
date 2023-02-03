import type { H3Event } from 'h3'
import { randPhrase } from '@ngneat/falso'
import type { IBotMessageResponse } from '~/types/chat.interface'

export default eventHandler(async (event: H3Event) => {
  const authHeader = getHeader(event, 'Authorization')

  const customResponse: IBotMessageResponse = {
    response: [
      {
        type: 'text',
        text: ` ${randPhrase()}`,
      }],
  }

  if (authHeader?.startsWith('Bearer '))
    return customResponse
})
