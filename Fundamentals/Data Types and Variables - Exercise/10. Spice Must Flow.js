function yield(initYield) {
    let totalAmount = 0
    let dayCounter = 0
    for (let currYield = initYield; currYield >= 100; currYield -= 10) {
        totalAmount += currYield - 26

        dayCounter++
    }
    if (dayCounter != 0) {

        totalAmount -= 26
    }
    console.log(dayCounter);
    console.log(totalAmount);
} yield(111)
yield(450)