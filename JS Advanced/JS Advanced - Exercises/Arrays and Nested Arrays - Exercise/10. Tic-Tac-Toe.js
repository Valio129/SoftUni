let checkWinner = function (matrix, currMark) {
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
            if (matchesCounter == 3) {
                if (el == currMark) {
                    return true;
                }
            }
        }
    }
    return false;

};
checkWinner([[false, 'O', false],
            [false, 'O', false],                           //   TODO: Understand why this 
            [false, 'O', false]], 'O')

// function solve(movesArr) {
//     //  for loop 
//     let dashboard =
//         [[false, false, false],
//         [false, false, false],                           //   TODO: Understand why this 
//         [false, false, false]];
//     // new Array(3);
//     // dashboard.fill([false, false, false], 0);        
//     for (let turn = 0; turn < movesArr.length; turn++) {
//         //      chek for player turn
//         let playerMark = 'X';
//         if (turn % 2 !== 0) {
//             playerMark = 'O';
//         }
//         let [row, col] = movesArr[turn].split(' ');
//         row = Number(row);
//         col = Number(col);

//         //      check if the place is alreadye picked
//         if ((dashboard[row][col] !== false) || (dashboard[row][col] === playerMark)) {
//             console.log("This place is already taken. Please choose another!");
//             continue;
//         }

//         // asign value
//         dashboard[row][col] = playerMark;
//         //check if we have winner
//         let isWinner = checkWinner(dashboard, playerMark);
//     }
//     console.log(dashboard);
// }
// solve(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]
// );