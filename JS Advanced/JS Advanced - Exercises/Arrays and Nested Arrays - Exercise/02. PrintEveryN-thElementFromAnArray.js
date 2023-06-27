function solve(arr, step) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i += step) {
        resultArr.push(arr[i]);

    }
    return resultArr;
}
solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6);