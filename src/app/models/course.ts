import { LanguageProgram } from './languageProgram';
import { Level } from './level';

export class Course {
    _id?: String;
    name: String;
    languageProgram: LanguageProgram;
    level: Level;
    fee: number;
    lessions: object[];

    constructor(name: String, languageProgram: LanguageProgram, level: Level,
        fee: number, lessions: object[]) {
        this.name = name;
        this.languageProgram = languageProgram;
        this.level = level;

        this.fee = fee;
        this.lessions = lessions;
    }
}