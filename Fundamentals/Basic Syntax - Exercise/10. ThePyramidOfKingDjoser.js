function pyramid(base, increment) {
    let stoneSum = 0
    let goldSum = 0
    let marbleSum = 0
    let lapisSum = 0
    let lineCounter = 0
    for (let currentStep = base; currentStep > 0; currentStep -= 2) {
        lineCounter++
        if (currentStep - 2 <= 0) {
            goldSum += Math.pow((currentStep), 2) * increment
            break;
        }
        // inner layer
        stoneSum += Math.pow((currentStep - 2), 2) * increment
        //    outer layer      if 5ft 
        if (lineCounter % 5 == 0) {
            lapisSum += ((currentStep * 4) - 4) * increment
        } else {
            marbleSum += ((currentStep * 4) - 4) * increment
        }

    }
    console.log(`Stone required: ${Math.ceil(stoneSum)}`);
    console.log(`Marble required: ${Math.ceil(marbleSum)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisSum)}`);
    console.log(`Gold required: ${Math.ceil(goldSum)}`);
    console.log(`Final pyramid height: ${Math.floor(increment * lineCounter)}`);

} pyramid(12,
    1)