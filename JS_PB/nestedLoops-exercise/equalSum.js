function equalSum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let outputArray = "";

    for (let numIterator = startNum; numIterator <= endNum; numIterator++) {
        let currentNum = numIterator;
        let oddSum = 0;
        let evenSum = 0;
       
        for (let indexCurrentNum = 1; indexCurrentNum <= 6; indexCurrentNum++) {
            //manipulate current num
             let currentNumDigit = currentNum % 10;

            // odd / even
            if (indexCurrentNum % 2 === 0) {
                evenSum += currentNumDigit;
            } else {
                oddSum += currentNumDigit;
            }

            currentNum = Math.trunc(currentNum / 10);

        }

        if (oddSum === evenSum) {
            outputArray += `${numIterator} `;
        }
        // clear buffer
        // evenSum = 0;
        // oddSum = 0;

    }
    console.log(outputArray);


} equalSum(["100000",
    "100050"])