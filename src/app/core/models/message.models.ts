export interface Message {
    _id: string;
    content: string;
    createdAt?: Date;
    user: string;
    type: string;
}
