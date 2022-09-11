function solve(input) {
    let array = input.sort((a, b) => b - a)
    let out = []
    while (array.length > 0) {
        out.push(array[0])&& array.shift()
        out.push(array[array.length-1]) && array.pop();
    }
    console.log(out.join(' '));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])