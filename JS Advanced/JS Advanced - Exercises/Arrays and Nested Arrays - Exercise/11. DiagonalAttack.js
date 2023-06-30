function solve(inputArr) {

    inputArr = inputArr.map(arr => arr.split(' '));
    for (let arr of inputArr) {
        arr = arr.map(Number);
    }


    let mainDiagSum = 0;
    let secDiagSum = 0;
    //TAKING MAIN DIAG SUM
    for (let i = 0; i < inputArr.length; i++) {
        mainDiagSum += inputArr[i][i];
    }
    //TAKING second DIAG SUM
    for (let row = inputArr.length - 1; row >= 0; row--) {
        for (let col = 0; col < inputArr.length; col++) {
            let el = inputArr[row][col];
            if (row === col) {
                secDiagSum += el;
            }
        }

    }
    console.log();
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
solve(
    ['1 1 1',
        '1 1 1',
        '1 1 0']

);