function solve(array) {
    let biggest = array[0]
    let out = []
    for (let currEle of array) {
        if (currEle >= biggest) {
            biggest = currEle
            out.push(currEle)
        }
    }
    console.log(out.join(' '));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
solve([20, 3, 2, 15, 6, 1])