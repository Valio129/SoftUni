function findGCD(a, b) {
    let gcd;
    for (let i = 1; i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}
findGCD(2154, 458);