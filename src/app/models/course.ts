import { LanguageProgram } from './languageProgram';
import { Level } from './level';

export class Course {
    id?: String;
    name: String;
    languageProgram: LanguageProgram;
    level: Level;
    status: number;
    fee: number;
    lessions: String;

    constructor(name: String, languageProgram: LanguageProgram, level: Level, status: number,
        fee: number, lessions: String) {
        this.name = name;
        this.languageProgram = languageProgram;
        this.level = level;
        this.status = status;
        this.fee = fee;
        this.lessions = lessions;
    }
}