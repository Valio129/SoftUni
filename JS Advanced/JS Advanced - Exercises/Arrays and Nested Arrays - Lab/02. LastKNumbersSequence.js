function solve(arrLength, prevNumsLength) {
    let outputArr = [1];
    for (let i = 1; i < arrLength; i++) {
        let currNum = 0;
        for (let index = i - prevNumsLength; index < i; index++) {
            if (index >= 0) {
                currNum += outputArr[index];
            }
        }
        outputArr.push(currNum);
    }
    return outputArr
}
solve(8, 2);
//[1, 1, 2, 4, 7, 13] 