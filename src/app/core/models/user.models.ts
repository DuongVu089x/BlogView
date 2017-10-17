export class UserModel {
    address: string;
    password: string;
    email: string;
    id: string;
    constructor(id: string, email: string, username: string, password: string, address?: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        if (address.length !== 0) {
            this.address = address
        }
    }
}
