function mining(gPerDay) {
    let goldSum = 0
    let index = 0
    let goldBGN = 0
    const BTCtoBGN = 11949.16
    let btcCounter = 0
    let firstDay = 0

    for (let gramsForTheDay = 1; gramsForTheDay <= gPerDay.length; gramsForTheDay++) {
        goldSum = gPerDay[index]
        index++
        if (gramsForTheDay % 3 == 0) {
            goldSum -= goldSum * 0.3
        }
        goldBGN += goldSum * 67.51
        if (goldBGN >= BTCtoBGN) {
            if (firstDay === 0) {
                firstDay = gramsForTheDay
            }
            while (goldBGN >= BTCtoBGN) {

                goldBGN -= BTCtoBGN
                btcCounter++
            }
        }
    }
    console.log(`Bought bitcoins: ${btcCounter}`);
    if (firstDay !== 0) console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    console.log(`Left money: ${(goldBGN.toFixed(2))} lv.`);
} mining([100, 200, 300])