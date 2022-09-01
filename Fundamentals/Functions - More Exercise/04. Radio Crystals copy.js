function radioCrystals(arr) {
    let array = arr
    const desiredThickness = array.shift()
    for (currChunk of array) {
        let currThickness = currChunk
        console.log(`Processing chunk ${currThickness} microns`);
        while (currThickness > desiredThickness) {
            let isxray = true
            if (currThickness / 4 > desiredThickness) {
                currThickness = currThickness.cut(currThickness, desiredThickness)
            } else if (currThickness - (currThickness * 0.2) > desiredThickness) {
                currThickness = currThickness.lap(currThickness, desiredThickness)
            } else if (currThickness - 20 > desiredThickness) {
                currThickness = currThickness.grind(currThickness, desiredThickness)
            } else if (currThickness - 2 > desiredThickness) {
                currThickness = currThickness.etch(currThickness, desiredThickness)
            } else if (currThickness - desiredThickness < 1) {
                if (isxray) {
                    currThickness = currThickness.xray(currThickness)
                    isxray = false
                }
            }

        }
        console.log(`Finished crystal ${desiredThickness} microns`);
    }

    function cut(currThickness, desiredThickness) {
        let counter = 0
        while ((currThickness / 4 > desiredThickness)) {
            currThickness = currThickness.cut(currThickness).counter()
            counter++
        }
        currThickness = currThickness.transportAndWash(currThickness);
        console.log(`Cut x${counter}`);
        return currThickness
    }

    function lap(currThickness, desiredThickness) {
        let counter = 0
        while (currThickness - (currThickness * 0.2) > desiredThickness) {
            currThickness -= currThickness * 0.2
            counter++
        }
        currThickness = currThickness.transportAndWash(currThickness);
        c
        console.log(`Lap x${counter}`);
        return currThickness
    }

    function grind(currThickness, desiredThickness) {
        let counter = 0
        while (currThickness - 20 > desiredThickness) {
            currThickness -= 20
            counter++
        }
        currThickness = currThickness.transportAndWash(currThickness);
        c
        console.log(`Grind x${counter}`);
        return currThickness
    }

    function etch(currThickness, desiredThickness) {
        let counter = 0
        while (currThickness - 2 > desiredThickness) {
            currThickness -= 2
            counter++
        }
        currThickness = currThickness.transportAndWash(currThickness);
        c
        console.log(`Etch x${counter}`);
        return currThickness
    }

    function xray(thickness) {
        thickness += 1
        console.log(`X-ray x1`);
        return thickness
    }
    function transportAndWash(thickness) {
        return Math.random(thickness)
    }



}
radioCrystals([1375, 50000])
/* if (curr(condition) > desired) {
    do function
}

function {
    while its possible{
        decrement curr
        call function counter
    }
    washt&move
    console.log(counter);
    return final product  
}
function counter {              / - it is global/
    increment
    return value    
}
*/