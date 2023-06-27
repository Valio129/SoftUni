function solve(arr, times) {
    for (let i = 0; i < times; i++) {
        const last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}
solve(['1',
    '2',
    '3',
    '4'],
    2
);