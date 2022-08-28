function calc(numOne, numTwo, operator) {
    let result;
    switch (operator) {
        case 'multiply':
            result = (numOne, numTwo) => numOne * numTwo
            break;
        case 'divide':
            result = (numOne, numTwo) => numOne / numTwo
            break;
        case 'add':
            result = (numOne, numTwo) => numOne + numTwo
            break;
        case 'subtract':
            result = (numOne, numTwo) => numOne - numTwo

        default:
            break;
    }
    console.log(result(numOne, numTwo, operator))
}
calc(40, 8, 'divide')