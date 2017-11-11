import { Message } from './message.models';

export interface IRoom {
    _id: string;
    listMessage: Message[];
}

export class Room implements IRoom {
    _id: string;
    listMessage: Message[];
}
