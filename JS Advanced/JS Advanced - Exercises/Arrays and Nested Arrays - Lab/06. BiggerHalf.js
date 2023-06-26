function solve(arr) {
    let outpurArr = arr.sort((a, b) => a - b)
        .splice(Math.floor(arr.length / 2), Math.floor(arr.length / 2));
    return outpurArr;
}
solve([4, 7, 2, 5]);