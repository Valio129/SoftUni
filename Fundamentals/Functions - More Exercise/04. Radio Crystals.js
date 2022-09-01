function radioCrystals(arr) {
    let chunks = arr
    const desiredThickness = array.shift()
    for (currChunk of chunks) {
        let currThickness = currChunk
        console.log(`Processing chunk ${currThickness} microns`);
        let workingThickness = currThickness
        let operation = 0
        if (workingThickness / 4 > desiredThickness) {
            operation = currThickness / 4
        }
        if (currThickness - (currThickness * 0.2) > desiredThickness) {
            operation = currThickness - (currThickness * 0.2)
        }
        if (currThickness - 20 > desiredThickness) {
            operation = currThickness - 20
        }
        if (currThickness - 2 > desiredThickness) {
            operation = currThickness - 20
        }
        if (currThickness - desiredThickness < 1) {

            if (isxray) {
                currThickness = currThickness.xray(currThickness)
                isxray = false
            }
        }
        console.log(`Finished crystal ${desiredThickness} microns`);
    }

    function operator(startValue, operation, endValue) {
        let counter = 0
        let result = startValue
        while (operation < endValue) {
            result = operation
            counter++
        }

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