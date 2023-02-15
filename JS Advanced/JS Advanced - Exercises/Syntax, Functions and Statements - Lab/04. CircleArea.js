function solve(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
        return;
    }
    const radius = input;
    const res = Math.PI * input ** 2;
    console.log(res.toFixed(2));
}
solve('name');