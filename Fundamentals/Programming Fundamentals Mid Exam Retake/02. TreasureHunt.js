function solve(input) {
    let chest = input.shift().split('|');
    while (input[0] !== 'Yohoho!') {
        let operation = input.shift().split(' ');
        let command = operation.shift();
        switch (command) {
            case 'Loot':
                for (let item of operation) {
                    if (chest.includes(item) === false) {
                        chest.unshift(item);
                    }
                }
                break;
            case 'Drop':

                if (Number(operation[0]) <= chest.length && Number(operation[0]) > 0) {
                    chest.push(chest[Number(operation[0])]);
                    chest.splice(Number(operation[0]), 1)
                }

                break;
            case 'Steal':
                let stolen = [];
                if (Number(operation[0]) >= chest.length) {
                    for (let index = 0; index < chest.length; index++) {
                        let item = chest.pop()
                        stolen.push(item);

                    }
                } else {
                    for (let index = 0; index < Number(operation[0]); index++) {
                        let item = chest.pop()
                        stolen.push(item);

                    }
                }
                stolen = stolen.reverse();
                console.log(stolen.join(', '));
                break;
            default:
                break;
        }

    }
    if (chest.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0
        for (const item of chest) {
            sum += item.length;
        }
        sum /= chest.length;
        console.log(`Average treasure gain: ${(sum).toFixed(2)} pirate credits.`);
    }

}
// solve(["Gold|Silver|Bronze|Medallion|Cup",

//     "Loot Wood Gold Coins",

//     "Loot Silver Pistol",

//     "Drop 3",

//     "Steal 3",

//     "Yohoho!"])
solve(["Diamonds|Silver|Shotgun|Gold",

    "Loot Silver Medals Coal",

    "Drop -1",

    "Drop 1",

    "Steal 6",

    "Yohoho!"]) 