function getFibonator() {
    let first = 0;
    let second = 1;
    let sum;
    return function () {
       sum = first + second
        first = second
        second = sum
        return sum
    };
}
let fib = getFibonator();
                    // 0    first
console.log(fib()); // 1    second -> first
console.log(fib()); // 1    sum ->    second
console.log(fib()); // 2               sum
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
