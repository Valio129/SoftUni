function solve(array) {
    const rotations = Number(array[array.length - 1])
    let workingArray = array
    workingArray.pop()
    for (let index = 0; index < rotations; index++) {
        let lastEl = workingArray.pop()
        workingArray.unshift(lastEl)

    }
    console.log(workingArray.join(' '));

}
solve(['1', '2', '3', '4', '2'])
solve(['Banana', 'Orange', 'Coconut',

    'Apple', '15'])