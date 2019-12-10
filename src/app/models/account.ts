import { Role } from './role';

export class Account {
    _id?: Number;
    fullName: String;
    username: String;
    gender?: String;
    phone?: String;
    address?: String;
    email: String;
    password: String;
    classId?:String;
    role:number;

    constructor(fullName: String, username: String, age: String, gender: String, phone: String, address: String, email: String, password: String, role:number) {
            this.fullName = fullName,
            this.username = username,
            this.gender = gender,
            this.phone = phone,
            this.address = address,
            this.email = email,
            this.password = password,
            this.role=role;
    }
}
