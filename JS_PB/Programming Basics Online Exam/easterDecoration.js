function solve(params) {
    const BASKET = 1.50
    const WREATH = 3.80
    const CHOKO_BUNNY = 7
    let globalAvg = 0;
    let clientCount = Number(params[0])
    let index = 1

    for (let currentClient = 1; currentClient <= clientCount; currentClient++) {

        let currentPrice = 0
        let itemCounter = 0
        let input = params[index]
        while (input !== "Finish") {
            let currentItem = input
            itemCounter++
            switch (currentItem) {
                case "basket":
                    currentPrice += BASKET
                    break;
                case "wreath":
                    currentPrice += WREATH
                    break;
                case "chocolate bunny":
                    currentPrice += CHOKO_BUNNY
                    break;
            }

            index++
            input = params[index]
        }
        if (itemCounter % 2 === 0) {
            currentPrice -= currentPrice * 0.20
        }
        globalAvg += currentPrice
        console.log(`You purchased ${itemCounter} items for ${(currentPrice).toFixed(2)} leva.`);
        index++
            input = params[index]
    }
    globalAvg /= clientCount
    console.log(`Average bill per client is: ${globalAvg.toFixed(2)} leva.`);

} solve(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])