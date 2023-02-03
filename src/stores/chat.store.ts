import type { IBotMessage, IBotMessageResponse, IUserMessage } from '~/types/chat.interface'

export const useChatStore = defineStore('chat', () => {
  const baseUrl = useRuntimeConfig().public.apiBaseUrl
  const auth = useAuthStore()

  const messages = ref<Array<IBotMessage | IUserMessage>>([])

  function addMessage(input: IBotMessage | IUserMessage): void {
    const lastMessage = messages.value.at(-1)

    switch (input.from) {
      case 'bot':{
        const isLastMessageWelcome = lastMessage?.from === 'bot' && (lastMessage as IBotMessage).isWelcomeMessage

        if (!isLastMessageWelcome)
          messages.value = [...messages.value, input]
        break
      }
      case 'user':
        messages.value = [...messages.value, input]
        break
      default:
        break
    }
  }

  async function sendMessage(userMessage: IUserMessage): Promise<void> {
    const isMessageEmpty = userMessage.text?.trim() === ''

    if (isMessageEmpty)
      return

    const { data, error } = await useFetch<IBotMessageResponse>(`${baseUrl}/sendMessage`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.sessionId}`,
      },
      body: {
        text: userMessage.text,
      },
    })

    if (error.value && error.value.statusCode) {
      console.error(error.value.statusCode)
      return
    }

    if (!data.value)
      return

    const { response } = data.value!
    const formattedBotMessages = formatBotMessages({ rawMessages: response })

    addMessage(userMessage)
    formattedBotMessages.forEach(addMessage)
  }

  function formatBotMessages({ rawMessages, isWelcomeMessage = false }: FormatBotMessagesParams): IBotMessage[] {
    return rawMessages.map(message => ({
      ...message,
      from: 'bot',
      isWelcomeMessage,
    }))
  }

  async function getWelcomeMessage(): Promise<void> {
    const { data, error, refresh } = await useFetch<IBotMessageResponse>(`${baseUrl}/getWelcomeMessage`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.sessionId}`,
      },
    })

    refresh()

    if (error.value && error.value.statusCode) {
      console.error(error.value.statusCode)
      return
    }

    if (!data.value)
      return

    const { response } = data.value!

    const formattedMessages = formatBotMessages({ rawMessages: response, isWelcomeMessage: true })
    formattedMessages.forEach(addMessage)
  }

  function clearMessages(): void {
    messages.value = []
    getWelcomeMessage()
  }

  return {
    messages,
    sendMessage,
    clearMessages,
    getWelcomeMessage,
  }
}, {
  persist: {
    storage: persistedState.cookiesWithOptions({
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      maxAge: 1000 * 60 * 60 * 24 * 365,
      path: '/chat',
    }),
  },
})

interface FormatBotMessagesParams {
  rawMessages: IBotMessageResponse['response']
  isWelcomeMessage?: boolean
}
