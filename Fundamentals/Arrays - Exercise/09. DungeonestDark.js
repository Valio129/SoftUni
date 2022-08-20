function dungeon(array) {
    let health = 100
    let coins = 0
    let roomCounter = 0
    let arr = array[0].split("|")
    for (let i = 0; i < arr.length; i++) {
        let currRoom = arr[i]
        roomCounter++
        let currContain = currRoom.split(" ")
        let quantity = Number(currContain[1])
        switch (currContain[0]) {
            case "potion":
                let healed = quantity    // 30  90
                if (healed + health >= 100) {
                    healed = 100 - health
                } 
                health += healed
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += Number(quantity)
                console.log(`You found ${quantity} coins.`);
                break;
            default:
                if (health > quantity) {
                    console.log(`You slayed ${currContain[0]}.`);
                    health -= Number(quantity)
                } else {
                    console.log(`You died! Killed by ${currContain[0]}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                }
                break;

        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

// dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])