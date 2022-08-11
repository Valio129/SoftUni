function solve(num) {
    let sum = 0
    let currNum = num
    while (currNum > 0) {
        sum += Math.floor(currNum % 10)
        currNum /= 10
    }
    for (let i = 0; i <= String(sum).length; i++) {
        if (String(sum)[i] == 9) {
            console.log(`${num} Amazing? True`);
            return;
        }

    }
    console.log(`${num} Amazing? False`);
}

solve(233)