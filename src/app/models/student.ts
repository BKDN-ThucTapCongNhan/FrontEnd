export class Student {
    _id?: string;
    fullName: string;
    gender: string;
    phone: string;
    email: string
    address: string;
    username: string;

    constructor(fullName, gender, phone, email, address, username) {
        this.fullName = fullName;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.username = username;
    }
}