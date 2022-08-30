function perfectNumChecker(num) {
    let sum = 0
    for (let currNum = 1; currNum < num; currNum++) {
        if (num % currNum === 0) {
            sum += currNum
        }
    }
    if (num === sum) {
        return 'We have a perfect number!'
    } else {
        return "It's not so perfect."
    }
}
console.log(perfectNumChecker(1236498));