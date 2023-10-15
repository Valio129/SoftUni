function solve() {
    
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
        let props =  Array.from(Object.keys(this))
        props = props.map((prop) => prop =`${prop}: ${this[prop]}`)
        return `${name} (${props.join(', ')})`;
    };
    return { Person, Teacher, Student };
    


}
const t = new Student('valio', 'valio@abv', 'Math');
console.log(t.toString());
