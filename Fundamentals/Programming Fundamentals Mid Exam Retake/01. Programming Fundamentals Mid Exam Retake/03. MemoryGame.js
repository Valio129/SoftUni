function solve(array) {
    let sequence = array.shift().split(' ');
    //get sequence
    // set moves counter
    // if the sequence = 0 before end - he wins
    // else - he lost
    let moves = 0;
    for (let i = 0; i < array.length - 1; i++) {
        moves++
        let indexes = array[i].split(' ').map(Number);
        let index1 = indexes[0]
        let index2 = indexes[1]
        if // CHECK FOR VALID AND NOT EQUAL INDEXES 
            (
            index1 < sequence.length && index2 < sequence.length &&
            index1 !== index2 &&
            index1 >= 0 && index2 >= 0
        ) {
            if (sequence[index1] === sequence[index2]) {
                // if he guesses the indexes, remove them from the sequence / else - Try again
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                sequence = sequence.filter(x => x !== sequence[index1]);
            } else {
                console.log("Try again!");
            }
        } else {
            let element = `-${moves}a`
            sequence.splice((sequence.length / 2), 0, element, element);
            console.log("Invalid input! Adding additional elements to the board");
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
    }
    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));
}
// solve([
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
// ])
solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)