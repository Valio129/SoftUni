function solve(array) {
    let inventory = array.shift().split(' ')
    for (let cmd of array) {
        cmd = cmd.split(' ')
        let command = cmd.shift()
        if (inventory.includes(cmd[0])) {
            switch (command) {
                case 'Repair':
                case 'Trash':
                    inventory.splice(inventory.indexOf(cmd[0]), 1)
                    if (command === 'Repair') {
                        inventory.push(cmd[0])
                    }
                    break;

                default:
                    break;
            }
        } else {
            if (command === 'Upgrade') {
                let equipment = cmd[0].split('-')
                if (inventory.includes(equipment[0])) {

                    inventory.splice(inventory.indexOf(equipment[0]) + 1, 0, `${equipment[0]}:${equipment[1]}`)
                }
            } else if (command === 'Buy') {
                inventory.push(cmd[0])
            }

        }

    }
    console.log(inventory.join(' '));
}
solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])