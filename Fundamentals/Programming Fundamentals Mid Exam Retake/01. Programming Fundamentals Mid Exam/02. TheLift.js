function solve(array) {
    //max wagon space - 4 
    //input - people count & wagon status
    // foreach wagon check for empty space and fill it with people(peopleCount --)
    //another forech to chek if there are still empty spaces available
    //if so -> print message]
    // if peopleCount is > 0 - > print message 
    // if wagons are full and queue is 0  -- print only the wagons 
    let queue = Number(array[0]);
    let wagons = array[1].split(' ').map(Number);
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] <= 4) {
            while (wagons[i] < 4 && queue > 0) {
                wagons[i]++;
                queue--;
            }
        }
    }
    if (queue > 0) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
    } else {
        for (const wagon of wagons) {
            if (wagon < 4) {
                console.log('The lift has empty spots!');
                break;
            }
        }
    }

    console.log(wagons.join(' '));
}
solve([
    "20",
    "0 2 0"
]

)
