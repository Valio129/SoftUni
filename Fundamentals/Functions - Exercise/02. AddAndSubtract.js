function addAndSubtract(first, second, last) {
    let sum = (a, b) => a + b
    let subtract = (result, third) => result - third
    return subtract(sum(first, second), last)
}
console.log(addAndSubtract(23,

    6,

    10));