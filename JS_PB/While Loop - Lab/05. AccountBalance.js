function solve(arg) {
    let index = 0;
    let balance = 0;
    let input = arg[index]

    while (input !== "NoMoreMoney") {
        let currNum = Number(input);
        index++;
        if (currNum < 0) {

            console.log("Invalid operation!");
            break;
        }
        balance += currNum;
        console.log(`Increase: ${(currNum).toFixed(2)}`);
        input = arg[index]
    }

    console.log(`Total: ${(balance).toFixed(2)}`);
} solve(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);