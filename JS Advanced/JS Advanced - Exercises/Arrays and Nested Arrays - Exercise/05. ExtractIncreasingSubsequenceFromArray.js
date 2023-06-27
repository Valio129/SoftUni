function solve(arr) {
    let currentBiggestNum = arr[0];
    let outputArr = [];
    for (const el of arr) {
        if (el >= currentBiggestNum) {
            currentBiggestNum = el;
            outputArr.push(el);
        }
    }
    return outputArr;
}
solve([10,
    3,
    8,
    4, 10,
    12,
    3,
    2,
    24]
);