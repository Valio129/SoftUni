function solve(array) {
    let inventory = array.shift().split(', ');
    let token = array.shift().split(' - ');
    while (token[0] !== 'Craft!') {
        let command = token[0];
        let item = token[1];
        switch (command) {
            case 'Collect':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Drop':
                if (inventory.includes(item)) {
                    const index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                }
                break;
            case 'Combine Items':
                item = item.split(':')
                const oldItem = item[0]
                if (inventory.includes(oldItem)) {
                    const newItem = item[1];
                    const index = inventory.indexOf(oldItem);
                    inventory.splice(index + 1, 0, newItem);

                }
                break;
            case 'Renew':
                if (inventory.includes(item)) {
                    const index = inventory.indexOf(item);
                    const sameItem = inventory[index];
                    inventory.splice(index, 1);
                    inventory.push(sameItem)
                }
                break;
            default:
                break;
        }
        token = array.shift().split(' - ');
    }
    console.log(inventory.join(', '));
}
solve([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);