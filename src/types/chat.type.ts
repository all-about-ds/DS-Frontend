export interface ChatDataType {
  [key: number]: {
    img: string;
    name: string;
    chat: string;
    createdAt: string;
    isMine: boolean;
  };
}

export interface ChatMessageType {
  img: string;
  name: string;
  chat: string;
  createdAt: string;
  isMine: boolean;
}
