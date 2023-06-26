function solve(arr) {
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % 2 !== 0) {
            out.push(element);
        }
    }
    out = out.map(a => a = a * 2).reverse();
    return out;
}
solve([3, 0, 10, 4, 7, 3]);