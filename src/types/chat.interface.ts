export interface IMessage {
  type: 'text' | 'image'
  text?: string
  imageUrl?: string
  from: 'bot' | 'user'
}

export interface IBotMessage extends IMessage {
  isWelcomeMessage: boolean
}

export interface IBotMessageResponse {
  response: Array<Pick<IBotMessage, 'type' | 'text' | 'imageUrl'>>
}

export interface IUserMessage extends IMessage {}
