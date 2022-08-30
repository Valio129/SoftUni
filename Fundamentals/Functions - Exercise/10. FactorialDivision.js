function freactionalDiv(firstNum, secondNum) {
    const out = parseFloat(factorial(firstNum) / factorial(secondNum))
    return `${out.toFixed(2)}`
    function factorial(a) {
        let result = a
        for (let i = a - 1; i >= 1; i--) {
            result *= i
        }
        return result;
    }
}
console.log(freactionalDiv(5, 2))