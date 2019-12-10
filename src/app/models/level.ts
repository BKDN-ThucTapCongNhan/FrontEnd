export class Level {
    _id?: String;
    name: String;
    code: String;

    constructor(name: String, code: String) {
        this.name = name;
        this.code = code;
    }
}