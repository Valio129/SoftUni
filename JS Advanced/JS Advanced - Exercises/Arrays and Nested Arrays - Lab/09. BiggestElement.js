function solve(matrix) {
    let biggestNum = matrix[0][0];
    for (const arr of matrix) {
        for (const el of arr) {
            if (el > biggestNum) {
                biggestNum = el;
            }
        }
    }
    return biggestNum;
}
solve([[20, 50, 10],
[8, 33, 145]]);