function guestList(commandArr) {
    let listArr = []
    for (command of commandArr) {
        command = command.split(' ')
        if (command.length === 3) {
            if (listArr.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`);
            } else {
                listArr.push(command[0])
            }
        } else {
            if (listArr.includes(command[0])) {
                listArr = listArr.filter(x => x !== command[0])
            }
            else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }
    console.log(listArr.join('\n'));
}
guestList(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!'])
guestList(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])