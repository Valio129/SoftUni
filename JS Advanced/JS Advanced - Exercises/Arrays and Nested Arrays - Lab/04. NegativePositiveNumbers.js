function solve(inputArr) {
    let outpurArr = [];
    for (const el of inputArr) {
        if (el < 0) {
            outpurArr.unshift(el);
        } else {
            outpurArr.push(el);
        }
    }
    console.log(outpurArr.join('\n'));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);