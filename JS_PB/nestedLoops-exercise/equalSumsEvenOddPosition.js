function equalSum(params) {
    let num1 = Number(params[0]);
    let num2 = Number(params[1]);
    let digitCounter = 1;
    let evenSum = 0;
    let oddSum = 0;
    for (let numberIterator = num1; numberIterator <= num2; numberIterator++) {
        for (let digitIterator = num1; digitIterator > 0; digitIterator /= 10) {
            let currentDigit = digitIterator % 10;

            if (digitCounter & 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
            digitCounter++;
        }

        console.log(evenSum);
        console.log(oddSum);
    }
}


equalSum(["100000", "100050"])