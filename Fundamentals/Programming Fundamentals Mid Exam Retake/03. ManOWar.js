function solve(arr) {
    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    const maxHealthCapacity = Number(arr.shift())

    while (arr[0] !== 'Retire') {
        let token = arr.shift().split(' ')
        let action = token.shift()

        switch (action) {
            case 'Fire':
            case 'Defend':
            case 'Repair':
                let index = Number(token.shift())
                let damage = Number(token.pop())
                switch (action) {
                    case 'Fire':
                        if (index >= 0 && index < warShip.length) {
                            warShip[index] -= damage;

                            if (warShip[index] <= 0) {
                                console.log('You won! The enemy ship has sunken.');
                                return
                            }
                        }

                        break;

                    case 'Defend':
                        let endIndex = Number(token.shift())
                        if ((index >= 0 && index < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) { //&& endIndex >= index
                            for (let i = index; i <= endIndex; i++) {
                                pirateShip[i] -= damage
                                if (pirateShip[i] <= 0) {
                                    console.log('You lost! The pirate ship has sunken.');
                                    return
                                }
                            }

                        }

                        break;

                    case 'Repair':
                        let health = damage
                        if (index >= 0 && index < pirateShip.length) {
                            if (pirateShip[index] + health > maxHealthCapacity) {
                                pirateShip[index] = maxHealthCapacity

                            } else {
                                pirateShip[index] += health
                            }
                        }
                        break;
                    default:
                        break;
                }

                break;


            case 'Status':
                let count = 0
                for (const section of pirateShip) {
                    if (section < maxHealthCapacity * 0.2) {
                        count++
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
            default:
                break;
        }

        // AT THE END OF EVERY LOOP -> Check for sunk ship

        for (const section of warShip) {

            if (section <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return
            }
        }
        for (const section of pirateShip) {
            if (section <= 0) {
                console.log('You lost! The pirate ship has sunken.');
                return
            }
        }

    }

    // Compare sums
    let shipSum = 0

    for (const section of pirateShip) {
        shipSum += section
    }
    console.log(`Pirate ship status: ${shipSum}`);

    shipSum = 0
    for (const section of warShip) {
        shipSum += section
    }
    console.log(`Warship status: ${shipSum}`);
}
// solve((["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"])
// )
solve((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
)