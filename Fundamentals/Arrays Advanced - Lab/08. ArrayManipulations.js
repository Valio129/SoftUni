function manipulateNums(array) {
    let numsArr = array.shift().split(" ").map(Number)
    for (command of array) {
        command = command.split(' ')
        const action = command[0]
        let value = Number(command[1])
        switch (action) {
            case "Add":
                numsArr.push(value)
                break;
            case "Remove":
                numsArr = numsArr.filter(x => x !== value)
                break;
            case "RemoveAt":
                numsArr.splice(value, 1)
                break;
            case "Insert":
                const index = Number(command[2])
                numsArr.splice(index, 0, value)
                break;
        }
    }
    console.log(numsArr.join(' '));
}
manipulateNums(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
//4 53 6 43 3