function solve(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const textRes = arr.join('');
    const revSum = arr.reduce((accumulator, currentValue) => accumulator + 1 / currentValue, 0);
    console.log(sum);
    console.log(revSum);
    console.log(textRes);

}
solve([1, 2, 3]);