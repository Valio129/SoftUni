function solve() {
}
class Figure {
    constructor() {
        this.cm = 1;
        this.m = cm * 100;
        this.mm = cm / 10;
        this.unit = cm;
    }
    get area() {

    }
    toString() {
        const units = Array.from(Object.keys(this));
        return `Figures units: ${units.join(' ')}`;
    }
    changeUnits(unit) {
        this.unit = this[unit];
    }
}
class Circle extends Figure {
    constructor(radius) {
        super(unit );
        this.radius = radius;
    }
    get area() {
        return Math.PI * this.radius ** 2 * this.unit;
    }
    toString() {
        const units = Array.from(Object.keys(this));
        return `Figures units: ${this.unit.name} Area: ${this.area} - radius: ${this.radius}`;
    }
}
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4