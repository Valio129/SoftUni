function solve(matryx) {
    let getMax = function (inputMatryx) {
        let sum = 0;
        for (let row = 0; row < inputMatryx.length; row++) {
            for (let col = 0; col < inputMatryx.length; col++) {
                if (row == col) {
                    sum += inputMatryx[row][col];
                }

            }
        }
        return sum;
    };
    const firstSum = getMax(matryx);
    matryx = matryx.map((arr => arr.reverse()));
    const secondSum = getMax(matryx);
    console.log(`${firstSum} ${secondSum}`);
}
solve(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
);
solve([[20, 40], [10, 60]]);