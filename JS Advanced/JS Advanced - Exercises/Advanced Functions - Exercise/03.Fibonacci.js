function getFibonator() {
    let first = 1;
    let second = 0;
    function getNum () {
        let temp1 = first + second  ;
         first = second;
         second = temp1;
        return temp1;
    }
    return getNum;
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

