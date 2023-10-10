class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        let num = this.value;
        return (`0x${(num.toString(16).toUpperCase())}`);
    }
    plus(input) {
        console.log(input);
        if (typeof input === 'number') {
            return this.value += input;
        } else {
            return this.value += input.value;
        }
    }
    minus(input) {
        if (typeof input === 'number') {
            return this.value -= input;
        } else {
            return this.value -= input.value;
        }
    }
     parse(input) {
        return parseInt(input, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));