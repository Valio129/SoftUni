class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get diameter() {
        if (!Number(this._radius)) {
            throw new Error('Invalid Input');
        }
        return this._radius * 2;
    }
    set diameter(value) {
        this._radius = value / 2;
    }
    get radius() {
        return this._radius;
    }
    get area() {
        return this._radius ** 2 * Math.PI;
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);