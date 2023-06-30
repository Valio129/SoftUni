function solve(movesArr) {
    //  for loop
    let dashboard =
        [[false, false, false],
        [false, false, false],                           //   TODO: Understand why this
        [false, false, false]];
    // new Array(3);
    // dashboard.fill([false, false, false], 0);
    let flag = false;
    let playerMark = 'X';
    let isWinner = false;
    for (let turn = 0; turn < movesArr.length; turn++) {

        let [row, col] = movesArr[turn].split(' ');
        row = Number(row);
        col = Number(col);

        //CHECK IF THE PLACE HAS BEEN ALREADY TAKEN
        if ((dashboard[row][col] !== false)) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        // ASSIGNING VALUE TO THE COORDINATES
        dashboard[row][col] = playerMark;

        //CHECK IF WE HAVE WINNER
        //horizontal check 
        if (dashboard[row].every(x => x === playerMark)) {
            isWinner = true;
            break;
        }
        //vertical check
        let vertCol = [];
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            vertCol.push(dashboard[rowIndex][col]);
        }
        if (vertCol.every(x => x === playerMark)) {
            isWinner = true;
            break;
        }
        // diagonal check
        if (row === col) {
            let mainDiag = [dashboard[0][0], dashboard[1][1], dashboard[2][2]];
            let secDiag = [dashboard[0][2], dashboard[1][1], dashboard[2][0]];
            if (
                mainDiag.every(x => x === playerMark) ||
                secDiag.every(x => x === playerMark)

            ) {
                isWinner = true;
                break;
            }
        }
        // CHEK FOR FILLED PLACES
        if (
            dashboard[0].every(x => x !== false)
            && dashboard[1].every(x => x !== false)
            && dashboard[2].every(x => x !== false)
        ) {
            flag = true;
        }


        if (flag) {
            break;
        }
        // CHECK FOR PLAYER TURN
        if (playerMark === 'X') {
            playerMark = 'O';
        } else {
            playerMark = 'X';
        }
    }
    //OUTPUT
    if (isWinner) {
        console.log(`Player ${playerMark} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
    dashboard.forEach(line => {
        console.log(line.join('\t'));
    });


}
solve(
    ["0 0",
        "0 0",
        "1 1",
        "0 1",
        "1 2",
        "0 2",
        "2 2",
        "1 2",
        "2 2",
        "2 1"]


);