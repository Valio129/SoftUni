class Person {
    constructor(firstName, lastName, age, email) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
         this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
// class Rectangle {
//     constructor(height, width) {
//     this.height = height;
//     this.width = width;
//     }
//     // Method
//     calcArea() { return this.height * this.width; }
//     }
//     const square = new Rectangle(10, 10);
//     console.log(square.calcArea());