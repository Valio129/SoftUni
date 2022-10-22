function solve(rooms) {
    let health = 100;
    let bitcoins = 0;
    rooms = rooms.split('|');
    let roomCounter = 0;
    for (let room of rooms) {
        roomCounter++;
        room = room.split(' ')
        let command = room[0];
        let value = Number(room[1]);
        switch (command) {
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            case 'potion':
                let amountHealed = value
                if (health + value > 100) {
                    amountHealed = 100 - health;
                    health = 100
                } else {
                    health += value
                }
                console.log(`You healed for ${amountHealed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            default:
                const monster = command;
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");