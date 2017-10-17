import { Message } from './message.models';

export interface User {
    _id: string;
    email: string;
    token: string;
    avatar: string;
    newMessage: string;
    listMessage: Message[];
}
