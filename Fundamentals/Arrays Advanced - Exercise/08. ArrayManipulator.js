function arrManipulate(nums, commandsArr) {

    // console.log(commandsArr);
    for (let element of commandsArr) {
        element = element.split(' ')
        let command = element.shift()
        element = element.map(Number)
        let index = element.shift()
        switch (command) {
            case 'add':
                nums.splice(index, 0, element[0])
                break;
            case 'addMany':
                nums.splice(index, 0, ...element)
                break;
            case "contains":
                console.log(nums.indexOf(index));
                break;
            case "remove":
                nums.splice(index, 1)
                break;
            case "shift":
                for (let i = 0; i < index; i++) {
                    nums.push(nums.shift())
                }
                break;
            case "sumPairs":
                let sum = []
                let ind = 0
                for (let i = 0; i < nums.length / 2; i++) {
                    if (typeof nums[ind + 1] !== 'number') {
                        nums[ind + 1] = 0
                    }
                    sum.push(nums[ind] + nums[ind + 1])
                    ind += 2
                }
                nums = sum.slice(0)
                break;
            case "print":
                console.log(`[ ${nums.join(', ')} ]`);
                return;
            default:
                break;
        }
    }
}
arrManipulate([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrManipulate([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
arrManipulate([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"])