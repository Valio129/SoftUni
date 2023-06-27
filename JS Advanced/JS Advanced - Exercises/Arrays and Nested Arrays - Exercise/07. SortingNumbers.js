function solve(arr) {
    arr = arr.sort((a, b) => a - b);
    let out =   [];
    while (arr.length > 0) {
        const first = arr.shift();
        const second = arr.pop();
        out.push(first);
        out.push(second);
    }
    return out;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);