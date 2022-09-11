function train(array) {
    let passengerWagons = array.shift().split(' ').map(Number);
    const maxCapacity = Number(array.shift());
    for (element of array) {
        element = element.split(' ');
        if (element[0] === "Add") {
            passengerWagons.push(Number(element[1]))
        } else {
            for (let index = 0; index < passengerWagons.length; index++) {
                if (passengerWagons[index] + Number(element[0]) <= maxCapacity) {
                    passengerWagons[index] += Number(element[0])
                    break;
                }
            }
        }
    }
    console.log(passengerWagons.join(' '));
}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])