function spiralMatrix(m, n) {
    // size of the matrix
    let totalSize = m * n;
    let matrix = [];
    for (let i = 0; i < m; i++) {
        let line = [];
        for (let index = 0; index < n; index++) {
            line.push(0);
        }
        matrix.push(line);
    }
    // iterating through the matrix
    // filling the elements
    let x = 0;
    let y = 0;
    let step = 0; // used to update the starting point
    for (let i = 0; i < totalSize;) {

        i++;
        // moving along Y - horizontal
        while (y + step < n - step) {
            matrix[x + step][y + step] = i;
            y++;
            i++;
        }
        y--;
        x++;
         // moving along X - vertical
        while (x + step < m - step) {
            matrix[x + step][y + step] = i;
            x++;
            i++;
        }
        x--;
        y--;
        // - horizontal return
        while (y + step >= step) {
            matrix[x + step][y + step] = i;
            i++;
            y--;
        }
        y++;
        x--;
        // vertical return
        while (x + step > step) {
            matrix[x + step][y + step] = i;
            i++;
            x--;
        }
        step++;
        i--;

    }
    // printing the output
    for (const line of matrix) {
        console.log(line.join(' '));
    }
}
spiralMatrix(5, 5);
// spiralMatrix(3, 3);