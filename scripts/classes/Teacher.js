import User from "./User.js";

export default class Teacher extends User {
    constructor(name, lastname, image, dictatedCourses, coursesQty) {
        super(name, lastname, image)
        this.dictatedCourses = dictatedCourses
        this.coursesQty = coursesQty
    }
    getDictatedCourses() {
        return this.dictatedCourses
    }
    
    getCoursesQty() {
        return this.coursesQty
    }

    setDictatedCourses() {
        this.dictatedCourses = newDictatedCourses
    }

    setCoursesQty() {
        this.coursesQty = newCoursesQty
    }
}

