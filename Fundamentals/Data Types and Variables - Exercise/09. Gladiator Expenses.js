function expenses(losts, hPrice, swPrice, shPrice, armPrice) {
    let brokenHelmTimes = 0
    let brokenSwordTimes = 0
    let brokenShieldTimes = 0
    let brokenArmorTimes = 0


    for (let currFight = 1; currFight <= losts; currFight++) {
        let isHelm = false
        let isSword = false
        if (currFight % 2 === 0) {
            brokenHelmTimes++;
            isHelm = true
        }
        if (currFight % 3 === 0) {
            brokenSwordTimes++;
            isSword = true
        }
        if (isHelm === true && isSword === true) {
            brokenShieldTimes++;
            if (brokenShieldTimes % 2 === 0) {
                brokenArmorTimes++;
            }
        }

    }

    let sum = (brokenHelmTimes * hPrice) + (brokenSwordTimes * swPrice) + (brokenShieldTimes * shPrice) + (brokenArmorTimes * armPrice)
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

} expenses(23,
    12.50,
    21.50,
    40,
    200)