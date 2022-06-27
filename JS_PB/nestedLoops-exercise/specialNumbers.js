function specialNum(params) {
    let specialNum = Number(params[0])
    let answer = ""
    for (let i = 1111; i <= 9999; i++) {
        let currentNum = "" + i;
        let divCounter = 0
        for (let digitIndex = 0; digitIndex < 4; digitIndex++) {
            let currentDigit = Number(currentNum.charAt(digitIndex))
            if (specialNum % currentDigit === 0) {
                divCounter++

            }
        }
        if (divCounter === 4) {
            answer += `${currentNum} `
        }


    }
    console.log(answer);
} specialNum(["3"])