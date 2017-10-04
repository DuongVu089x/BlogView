export class UserModel {
    constructor(id: string, email: string, username: string, password: string, address?: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        if (address.length !== 0) {
            this.address = address
        }
    }

    public id: string;
    public email: string;
    public username: string;
    public password: string;
    public address: string;
}