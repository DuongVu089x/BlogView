import { User } from './../models/user.model';
export class SystemConstants {
    public static CURRENT_USER = 'CURRENT_USER';
    public static BASE_API = 'http://localhost:3000';
    public static USER: User = localStorage.getItem(SystemConstants.CURRENT_USER) ?
        JSON.parse(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER))._body) : '';
}
