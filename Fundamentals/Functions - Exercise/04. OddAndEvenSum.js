function oddEvenSum(number) {
    let oddSum = 0
    let evenSum = 0
    let numAsString = number.toString()
    for (let el of numAsString) {
        const currNum = Number(el)
        if (currNum % 2 === 0) {
            evenSum += currNum
        } else {
            oddSum += currNum
        }
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddEvenSum(1000435)