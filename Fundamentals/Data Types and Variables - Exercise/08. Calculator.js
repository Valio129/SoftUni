function calculate(a, operator, b) {
    let num1 = Number(a)
    let num2 = Number(b)
    if (operator === "+") {
        console.log(`${(num1 + num2).toFixed(2)}`);
    } else if (operator === "-") {
        console.log(`${(num1 - num2).toFixed(2)}`);
    }
    else if (operator === "/") {
        console.log(`${(num1 / num2).toFixed(2)}`);
    } else if (operator === "*") {
        console.log(`${(num1 * num2).toFixed(2)}`);
    }

} calculate(5,
    '+',
    10)

calculate(25.5,
    '-',
    3)