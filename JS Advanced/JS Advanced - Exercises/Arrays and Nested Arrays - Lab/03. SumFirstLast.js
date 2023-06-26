function solve(inputArr) {
    const firsrEl = Number(inputArr[0]);
    const lastEl = Number(inputArr[inputArr.length - 1]);
    const result = firsrEl + lastEl;
    return result;
}
solve(['20', '30', '40']);