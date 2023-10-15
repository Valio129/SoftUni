function createPerson(firstName, lastName) {
    const out = {
        firstName, lastName, fullName: `${firstName} ${lastName}`
    };
    Object.defineProperty(out, 'fullName', {
        get() {
           return `${this.firstName} ${this.lastName}`;
        },
        set(name) {
            const [first, last] = name.split(' ')
            if (first && last) {
                this.firstName = first
                this.lastName = last
            }
        },
        configurable: true,
        enumerable: true
    });
    return out;
}
let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

