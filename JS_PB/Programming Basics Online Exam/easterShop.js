function easterShop(params) {
    let currentEggCount = Number(params[0])
    let index = 1
    let input = params[index]
    let soldCounter = 0
    let isBigger = false
    let amount = 0
    // && currentEggCount > 0   
    while (input !== "Close") {
        let action = input
        index++
        amount = Number(params[index])
        if (amount > currentEggCount && action === "Buy") {
            isBigger = true
            break;
        }
        index++
        input = params[index]
        switch (action) {
            case "Buy":
                currentEggCount -= amount
                soldCounter += amount
                break;
            case "Fill":
                currentEggCount += amount


        }

    }
    let output = ""
    if (isBigger) {
        output = "Not enough eggs in store!"
        console.log(output);
        output = `You can buy only ${currentEggCount}.`
        console.log(output);
        return

    } else {
        output = "Store is closed!"
        console.log(output);
        output = `${soldCounter} eggs sold.`
        console.log(output);
    }


} easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])