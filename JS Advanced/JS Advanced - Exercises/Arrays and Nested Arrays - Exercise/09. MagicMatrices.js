function solve(matrix) {
    let result = true;
    const comparableSum = matrix[0].reduce((accumulator, currentValue) => accumulator + currentValue,
        0);
    // horizontal check
    for (const arr of matrix) {
        const currentSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
            0);
        if (currentSum !== comparableSum) {
            result = false;
            break;
        }
    }
    // vertical check 
    for (let row = 0; row < matrix.length; row++) {
        let sum = 0;
        for (let col = 0; col < matrix.length; col++) {
            sum += matrix[col][row];
        }
        if (sum !== comparableSum) {
            result = false;
            break;
        }
    }
    console.log(result);
}
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);