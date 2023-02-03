import type { IBotMessage, IBotMessageResponse, IUserMessage } from '~/types/chat.interface'

export const useChatStore = defineStore('chat', () => {
  const baseUrl = useRuntimeConfig().public.apiBaseUrl
  const auth = useAuthStore()

  let messages = reactive<Array<IBotMessage | IUserMessage>>([])

  const isTyping = ref(false)
  const isSending = ref(false)
  const isSendingError = ref(false)
  const isSendingSuccess = ref(false)

  function addMessage(input: IBotMessage | IUserMessage): void {
    const lastMessage = messages.at(-1)

    if (input.from === 'bot') {
      const isLastMessageWelcome = lastMessage?.from === 'bot' && (lastMessage as IBotMessage).isWelcomeMessage

      if (!isLastMessageWelcome)
        messages = [...messages, input]
      else return
    }

    messages = [...messages, input]
  }

  async function sendMessage(userMessage: IUserMessage): Promise<void> {
    const isMessageEmpty = userMessage.text!.trim() === ''

    if (isMessageEmpty)
      return

    isSending.value = true
    isSendingError.value = false
    isSendingSuccess.value = false

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
      isSendingError.value = true
      console.error(error.value.statusCode)
      return
    }

    addMessage({
      text: userMessage.text,
    } as IUserMessage)

    const { response } = data.value!

    isSending.value = false
    isSendingSuccess.value = true

    const formattedBotMessages = formatBotMessages({ rawMessages: response })
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
    const { data, error } = await useFetch<IBotMessageResponse>(`${baseUrl}/getWelcomeMessage`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.sessionId}`,
      },
    })

    if (error.value && error.value.statusCode) {
      console.error(error.value.statusCode)
      return
    }

    const { response } = data.value!

    const formattedMessages = formatBotMessages({ rawMessages: response, isWelcomeMessage: true })
    formattedMessages.forEach(addMessage)
  }

  function clearSendingStatus(): void {
    [isSending, isSendingError, isSendingSuccess].forEach((status) => {
      status.value = false
    })
  }

  function clearMessages(): void {
    messages = []
    getWelcomeMessage()
  }

  return {
    messages,
    isTyping,
    isSending,
    isSendingError,
    isSendingSuccess,
    sendMessage,
    getWelcomeMessage,
    clearSendingStatus,
    clearMessages,
  }
})

interface FormatBotMessagesParams {
  rawMessages: IBotMessageResponse['response']
  isWelcomeMessage?: boolean
}
