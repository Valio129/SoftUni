function modifyNum(num) {
  
    let currNum = num.toString().split("")
    while (true) {
        let avgSum = 0
        for (let el of currNum) {
            const digit = Number(el)
            avgSum += digit
        }
        avgSum /= currNum.length
        if (avgSum < 5) {
            currNum.push(9)
            continue;
        }
        break;
    }
    console.log(currNum.join(""));
}
modifyNum(101)