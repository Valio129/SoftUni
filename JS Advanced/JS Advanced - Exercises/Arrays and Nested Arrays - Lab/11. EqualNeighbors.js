function solve(matrix) {
    let matchesCounter = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const el = matrix[row][col];
            if (row !== matrix.length - 1) {
                if (el === matrix[row][col + 1]) {
                    matchesCounter++;
                }
                if (el === matrix[row + 1][col]) {
                    matchesCounter++;
                }
            } else {
                if (el === matrix[row][col + 1]) {
                    matchesCounter++;
                }
            }
        }
    }
    return matchesCounter;
}
solve(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
);