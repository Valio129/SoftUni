//  recieve initial energy 
//  until run out of energy or until recieving end of battle
//  read distance and subtract it from the energy 
//  every 3rd won battle adds energy equal to won battles count
//  print depends from the end and wether you ran out of energy or not


function solve(arr) {
    let array = arr.slice(0);
    let energy = array.shift();
    let wins = 0
    while (array[0] !== 'End of battle') {
        let distance = Number(array.shift());
        if (energy >= distance) {
            energy -= distance;
            wins++
            if (wins % 3 === 0) {
                energy += wins
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return;
        }
    }
    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}
solve((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
)
solve((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
)