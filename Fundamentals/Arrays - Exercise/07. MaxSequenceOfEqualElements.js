function solve(array) {
    let biggestSequence = []
    let tempSequence = []
    for (let i = 0; i < array.length; i++) {
        let currElement = array[i]
        let nextElement = array[i + 1]
        if (currElement === nextElement) {
            tempSequence.push(currElement)
        } else if (currElement === array[i - 1]) {
            tempSequence.push(currElement)
           
            if (tempSequence.length > biggestSequence.length) {
                biggestSequence = tempSequence
            }
            tempSequence = []
        }

    }
        console.log(biggestSequence.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
solve([1, 1, 1, 2, 3, 1, 3, 3])
solve([4, 4, 4, 4])
solve([0, 1, 1, 5, 2, 2, 6, 3, 3])