function bomb(numsArr, bombArr) {
    const bombNum = bombArr[0]
    const bombPower = bombArr[1]
    let index = 0
    while (numsArr.includes(bombNum)) {
        if (numsArr[index] === bombNum) {
            let startIndex = index - bombPower
            let deleteCount = (bombPower * 2) + 1
            if (startIndex < 0) {
                startIndex = 0
                deleteCount = (bombPower * 2)
            }
           numsArr.splice(startIndex, deleteCount)
            index = 0
            continue;
        }
        index++
    }
    let sum = 0
    for (let el of numsArr) {
        sum +=el
    }
    console.log(sum);
}
bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bomb([1, 4, 4, 2, 8, 9, 1], [9, 3])
bomb([1, 7, 7, 1, 2, 3], [7, 1])
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
bomb([1, 9, 2, 2], [1, 1])