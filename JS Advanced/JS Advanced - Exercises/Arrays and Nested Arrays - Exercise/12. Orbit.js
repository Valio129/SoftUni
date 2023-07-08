function solve(input) {
    function isFull(table) {
        let out = false;
        for (const row of table) {
            if (!row.includes(undefined)) {
                out = true;
            }
        }
        return out;
    }

    let [w, h, x, y] = input;
    //  create matrix and get starting point
    //  create orbit with init value + 1 on every iteration +1 
    //  orbit has offset which increments by 1 on every iteration

    let matrix = new Array(w);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(h);
    }
    let orbitValue = 1;
    let orbitOffset = 1;
    matrix[x][y] = orbitValue;
    while (isFull(matrix) == false) {
        let xOffset = orbitOffset;
        let yOffset = orbitOffset;
        matrix[yOffset].fill(orbitValue, (x - xOffset), (x + xOffset));
        orbitOffset++;
        orbitValue++;
    }
    console.log();
}
solve([4, 4, 0, 0]);