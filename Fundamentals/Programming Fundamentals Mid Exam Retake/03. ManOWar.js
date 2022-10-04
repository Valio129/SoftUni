function solve(arr) {
    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealthCapacity = Number(arr.shift())
    while (arr[0] !== 'Retire') {
        let token = arr.shift().split(' ')
        let action = token.shift()
        switch (action) {
            case 'Fire ':
            case 'Defend':
            case 'Repair':
                let index = Number(token.shift())
                let damage = Number(token.pop())
                switch (action) {
                    case 'Fire':
                        if (index <= 0 && index < warShip.length) {
                            warShip[index] -= damage;
                        }
                        break;
                    case 'Defend':
                        let endIndex = Number(token.shift())
                        if (index <= 0 && index < pirateShip.length) {
                            pirateShip[index] -= damage;
                            for (let i = index; i <= endIndex; i++) {
                                pirateShip[i] -= damage
                            }
                        }
                        break;
                    case 'Repair':
                        let health = Number(arr.shift())
                        if (index <= 0 && index < pirateShip.length) {
                            pirateShip[index] += health
                        }
                        break;
                    default:
                        break;
                }
                break;
            case 'Status':
                let count = 0
                for (const section of pirateShip) {
                    if (section <= maxHealthCapacity * 0.2) {
                        counter++
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
            default:
                break;
        }
        for (const section of pirateShip) {
            if (section <= 0) {
                console.log('You lost! The pirate ship has sunken.');
                return
            }
        }
        for (const section of warShip) {
            if (section <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return
            }
        }
    }
    let shipSum = 0
    for (const section of pirateShip) {
        shipSum += section
    }
    console.log(`Pirate ship status: ${shipSum}`);
    for (const section of warShip) {
        shipSum += section
    }
    console.log(`Warship  ship status: ${shipSum}`);
}
solve(["12>13>11>20>66",

    "12>22>33>44>55>32>18",

    "70",

    "Fire 2 11",

    "Fire 8 100",

    "Defend 3 6 11",

    "Defend 0 3 5",

    "Repair 1 33",

    "Status",

    "Retire"]) 