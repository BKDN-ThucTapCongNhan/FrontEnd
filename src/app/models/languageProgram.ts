export class LanguageProgram {
    id?:String;
    name:String;
    brief:String;

    constructor(name:String,brief:String) {
        this.name=name;
        this.brief=brief;
    }
}