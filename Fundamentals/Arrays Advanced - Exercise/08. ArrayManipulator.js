function solve(nums, commands) {
    for (let el of commands) {
        el = el.split(' ')
        let action = el.shift()
        el = el.map(Number)
        switch (action) {
            case 'add':
                nums.splice(el[0], 0, el[1])
                break;
            case 'addMany':
                nums.splice(el.shift(), 0, ...el)
                break;
            case "contains":
                const i = nums.indexOf(el[0])
                console.log(i)
                break;
            case "remove":
                nums.splice(el[0], 1)
                break;
            case "shift":
                for (let index = el[0]; index > 0; index--) {
                    let a = nums.shift()
                    nums.push(a)
                }
                break;
            case "sumPairs":
                let res = []
                while (nums.length > 0) {
                    let a = nums.shift()
                    let b = nums.shift()
                    res.push(a + b)
                    if (b === undefined || b === NaN) {
                        res.push(a)
                        break;
                    }
                }
                nums = res.slice(0)
                break;
            case "print":
                console.log(`[ ${nums.join(', ')} ]`);
                return;
                break;
            default:
                break;
        }
    }

}
// solve([1, 2, 4, 5, 6, 7],

//     ['add 1 8', 'contains 1', 'contains 3', 'print'])
solve([1, 2, 3, 4, 5],

    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])


    // [ 2, 3, 5, 5, 9, 8, 7, 6, 5, 1 ]
    // [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]