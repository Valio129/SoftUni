class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    decrease(length) {
        if (length > this.innerLength) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }
    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return (this.innerString.substring(0, this.innerString.length - this.innerLength).concat('.'.repeat(3)));
        } else if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }
    }
    increase(length) {
        this.innerLength += length;
    }
}
let test = new Stringer("TEst", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
