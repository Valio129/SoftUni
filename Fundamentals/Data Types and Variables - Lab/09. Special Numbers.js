function spec(n) {
    for (let currNum = 1; currNum <= n; currNum++) {
        let sum = 0
        let num = String(currNum)
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i])

        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${currNum} -> True`);
        } else {
            console.log(`${currNum} -> False`);
        }


    }
} spec(15)