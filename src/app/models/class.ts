export class Class {
    _id?: String;
    name: String;
    courseID: String;
    dateBegin: String;
    dateEnd: String;

    constructor(name: String, nameCourse: String, startDay: String, endDay: String) {
        this.name = name;
        this.courseID = nameCourse;
        this.dateBegin = startDay;
        this.dateEnd = endDay;
    }
    setId(id: string) {
        this._id = id;
    }
}