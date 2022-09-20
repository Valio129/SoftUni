function equalNeighbours(matrix) {
    let pairs = 0
    for (let arrayIndex = 0; arrayIndex < matrix.length; arrayIndex++) {
        let currArr = matrix[arrayIndex]
        for (let index = 0; index < currArr.length; index++) {
            const element = currArr[index]
            const elementNext = currArr[index + 1]
            if (element === elementNext) {
                pairs++
                index += 2
                continue;
            }
        }
        let arrayNext = matrix[arrayIndex + 1]
        if (arrayIndex < matrix.length - 1) {
            for (let index = 0; index < currArr.length; index++) {
                const element = currArr[index]
                const eleBelow = arrayNext[index]
                if (element === eleBelow) {
                    pairs++
                }
            }

        }
    }

    console.log(pairs);
}
equalNeighbours([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']])