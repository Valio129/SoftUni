function solve(array) {
    const numberOfCities = Number(array.shift())
    let totalProfit = 0

    for (let city = 1; city <= numberOfCities; city++) {
        const currCity = array.shift()
        let profit = Number(array.shift())
        let expenses = Number(array.shift())
        if (city % 5 === 0) {
            profit -= profit * 0.1
        }
        else if (city % 3 === 0) {
            expenses += expenses * 0.5
        }
        let currProfit = profit - expenses
        totalProfit += currProfit
        console.log(`In ${currCity} Burger Bus earned ${currProfit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
solve(["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])
console.log('--------------------------');
solve(["15",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20", "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20", "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
