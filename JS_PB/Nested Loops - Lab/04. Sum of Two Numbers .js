function solve(params) {
    let num1 = Number(params[0]);
    let num2 = Number(params[1]);
    let magicNum = Number(params[2]);
    let iterationCounter = 0;

    for (let x = num1; x <= num2; x++) {

        for (let y = num1; y <= num2; y++) {
            iterationCounter++;
            if (x + y === magicNum) {
                console.log(`Combination N:${iterationCounter} (${x} + ${y} = ${magicNum})`);
                return;
            }

        }
    }
    console.log(`${iterationCounter} combinations - neither equals ${magicNum}`);

} solve(["23",
    "24",
    "20"])