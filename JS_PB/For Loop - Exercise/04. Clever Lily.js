function solve(input) {
    let lillysAge = Number(input[0]);
    const loundryPrice = Number(input[1]);
    const pricePerToy = Number(input[2]);
    let budget = 0;
    let toyCounter = 0;
    let moneyPerBirthday = 0;
    let brotherLent = 0;
    for (let i = 1; i <= lillysAge; i++) {
        if (i % 2 == 0) {
            moneyPerBirthday += 10;
            brotherLent++;
            budget += moneyPerBirthday;;
        }
        else {
            toyCounter++;
        }
    }
    let output = "";
    budget += (toyCounter * pricePerToy) - brotherLent;

    budget >= loundryPrice
        ? output = `Yes! ${(budget - loundryPrice).toFixed(2)}`
        : output = `No! ${(loundryPrice - budget).toFixed(2)}`
    console.log(output);

} 