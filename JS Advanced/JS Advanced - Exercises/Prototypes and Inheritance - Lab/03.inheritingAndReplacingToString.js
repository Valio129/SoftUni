function solve() {
    
    return { Person, Teacher, Student };
    


}
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

}
class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}
class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }
}
Person.prototype.toString = function () {
    let name = this.constructor.name;
    return `${name} ${ this.constructor}`;
};
const t = new Teacher('valio', 'valio@abv', 'Math');
console.log(t.toString());
