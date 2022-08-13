function primeChecker(num) {
    let isPrime = false
    let primeCounter = 0
    for (let currNum = 1; currNum <= num; currNum++) {
        if (num % currNum === 0) {
            primeCounter++;
        }
    }
    if (primeCounter === 2) {
        isPrime = true
    } console.log(isPrime);
}
primeChecker(7)
primeChecker(81)