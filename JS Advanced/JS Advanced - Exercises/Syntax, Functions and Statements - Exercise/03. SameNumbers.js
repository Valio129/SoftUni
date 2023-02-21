function findSame(inputNum) {
    let isSame = true;
    let numAsArr = inputNum.toString().split('');
    let sum = numAsArr.map(Number)
        .reduce((a, b) => a + b, 0);
    if (!numAsArr.every(el => el === numAsArr[0])) {
        isSame = false;
    }
    console.log(isSame);
    console.log(sum);
}
findSame(22632);