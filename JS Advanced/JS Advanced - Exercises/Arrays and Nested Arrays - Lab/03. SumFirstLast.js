function solve(inputArr) {
    const firstEl = Number(inputArr[0]);
    const lastEl = Number(inputArr[inputArr.length - 1]);
    const result = firstEl + lastEl;
    return result;
}
solve(['20', '30', '40']);