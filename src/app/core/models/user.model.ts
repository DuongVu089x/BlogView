import { Room } from './room.models';
import { Message } from './message.models';

interface IUser {
    _id: string;
    email: string;
    token: string;
    avatar: string;
    newMessage: string;
    listMessage: Message[];
    room: Room;
}

export class    User implements IUser {
    _id: string;
    email: string;
    token: string;
    avatar: string;
    newMessage: string;
    listMessage: Message[];
    room: Room;
}
