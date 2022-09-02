function radioCrystals(arr) {
    let array = arr
    const desiredThickness = array.shift()
    for (currChunk of array) {
        let currThickness = currChunk
        console.log(`Processing chunk ${currThickness} microns`);
        while (currThickness > desiredThickness) {
            let isxray = true
            let operation = 0
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

            currThickness = currThickness.loopOperation(currThickness, operation, desiredThickness)

        }
        console.log(`Finished crystal ${desiredThickness} microns`);
    }

   function loopOperation( result ,operation, end) {
        while (operation < end) {
            result = operation
        }
        return result 
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