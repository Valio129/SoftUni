function easterBake(params) {
    let easterBreadCount = Number(params[0])
    // Един пакет захар е 950 грама,
    // един пакет брашно е 750 грама
    let index = 1
    const flourBag = 750
    const sugarBag = 950

    let sumFlour = 0
    let maxFlour = 0
    let sumSugar = 0
    let maxSugar = 0

    for (let currentBread = 1; currentBread <= easterBreadCount; currentBread++) {
        let currentSugar = Number(params[index])
        sumSugar += currentSugar
        index++
        let currentFlour = Number(params[index])
        sumFlour += currentFlour

        if (currentFlour > maxFlour) {
            maxFlour = currentFlour
        }
        if (currentSugar > maxSugar) {
            maxSugar = currentSugar
        }

        index++
    }

    let bagsFlourNeeded = Math.ceil(sumFlour / flourBag)
    let bagsSugarNeeded = Math.ceil(sumSugar / sugarBag)
    console.log(`Sugar: ${bagsSugarNeeded}`);
    console.log(`Flour: ${bagsFlourNeeded}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

} easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"])
