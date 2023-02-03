export interface IMessage {
  type: 'text' | 'image'
  text?: string
  url?: string
  from: 'bot' | 'user'
}

export interface IBotMessage extends IMessage {
  isWelcomeMessage: boolean
}

export interface IBotMessageResponse {
  response: Array<Pick<IBotMessage, 'type' | 'text' | 'url'>>
}

export interface IUserMessage extends IMessage {}
