function solve(inputArr) {
    //Converting the input el's to numbers
    let matrix = inputArr.map(arr => arr = arr.split(' '));
    matrix.forEach((line, index) => {
        matrix[index] = matrix[index].map(Number);
    });
    let mainDiagSum = 0;
    let secDiagSum = 0;
    let col = matrix[0].length - 1;
    for (let row = 0; row < matrix.length; row++) {
        //TAKING MAIN DIAG SUM
        mainDiagSum += matrix[row][row];
        //TAKING second DIAG SUM
        let el = matrix[row][col];
        secDiagSum += el;
        col--;
    }
    col = matrix[0].length - 1;
    if (mainDiagSum == secDiagSum) {
        //Set other elements to the sum
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[row].length; column++) {
                if (row !== column) {
                    if (column !== col) {
                        matrix[row][column] = secDiagSum;
                    }
                }
            }
            col--;
        }
    }
    //output
    matrix.forEach(line => console.log(line.join(' ')));
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
// solve(
//     ['1 1 1',
//         '1 1 1',
//         '1 1 0']
// );