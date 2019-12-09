export class Exercise {
    id?: Number;
    nameStudent: String;
    linkGitHub: String;
    nameExercise:String;
    point: Number;
    send: boolean;

    constructor(name, linkGitHub,nameExercise, point, send) {
        this.nameStudent = name;
        this.linkGitHub = linkGitHub;
        this.nameExercise=nameExercise;
        this.point = point;
        this.send = send;
    }

}