export class Class {
    id?:number;
    name:String;
    nameCourse:String;
    startDay:Date;
    endDay:Date;

    constructor(name:String,nameCourse:String,startDay:Date,endDay:Date) {
        this.name=name;
        this.nameCourse=nameCourse;
        this.startDay=startDay;
        this.endDay=endDay;
    }
}