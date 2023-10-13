class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {

        console.log(typeof this.value);
        return this.value;
    }
    toString() {
        const num = this.value;
        return (`0x${(num.toString(16).toUpperCase())}`);
    }
    plus(input) {
        const num = this.value;
        console.log(input);
        if (typeof input === 'number') {
            return new Hex(num + input);
        } else {
            const secondNum = input.value;
            return new Hex(num + secondNum);
        }
    }
    minus(input) {
        const num = this.value;
        if (typeof input === 'number') {
            return new Hex((num - input));
        } else {
            return new Hex((num - input.value));
        }
    }
     parse(input) {
        return parseInt(input, 16);
    }
}
let FF = new Hex(255);
// console.log(FF.toString());
// console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b));
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));