function radioCrystals(arr) {
    const desiredThickness = arr.shift()
    let chunks = arr
    for (currChunk of chunks) {
        let isxray = true
        let currThickness = currChunk
        console.log(`Processing chunk ${currChunk} microns`);
        let operation = "Cut"
        if (operator(currThickness, operation, desiredThickness) > desiredThickness) {
            currThickness = operator(currThickness, operation, desiredThickness, "y")
        }
        if ((operator(currThickness, "Lap", desiredThickness)) > operator(currThickness, "Grind", desiredThickness)) {
            operation = "Lap"
            if (operator(currThickness, operation, desiredThickness) > desiredThickness) {
                currThickness = operator(currThickness, operation, desiredThickness, "y")
            }
            operation = "Grind"
            if (operator(currThickness, operation, desiredThickness) > desiredThickness) {
                currThickness = operator(currThickness, operation, desiredThickness, "y")
            }
        } else {
            operation = "Grind"
            if (operator(currThickness, operation, desiredThickness) > desiredThickness) {
                currThickness = operator(currThickness, operation, desiredThickness, "y")
            }
            operation = "Lap"
            if (operator(currThickness, operation, desiredThickness) > desiredThickness) {
                currThickness = operator(currThickness, operation, desiredThickness, "y")
            }
        }
        operation = "Etch"
        if (operator(currThickness, operation, desiredThickness)  > desiredThickness) {
            currThickness = operator(currThickness, operation, desiredThickness, "y")
        }
        if (currThickness - desiredThickness < 1) {
            if (isxray) {
                currThickness += 1
                console.log('X-ray x1')
                isxray = false
            }
        }

        console.log(`Finished crystal ${currThickness} microns`);
    }

    function operator(startValue, operation, endValue, count) {
        let counter = 0
        let result = startValue
        while (calc(result, operation) > endValue || calc((result + 1), operation) >= endValue) {
            result = calc(result, operation)
            counter++
        }

        Math.floor(result)

        if (count === "y") { console.log(`${operation} x${counter}`); }
        return result
    }

    function calc(num, operator) {
        let numResult;
        switch (operator) {
            case 'Lap':
                numResult = num - (num * 0.2)
                break;
            case 'Cut':
                numResult = num / 4
                break;
            case 'Grind':
                numResult = num - 20
                break;
            case 'Etch':
                numResult = num - 2
            default:
                break;
        }
        return numResult
    }

}
radioCrystals([1375, 50000])
/*
















if (curr(condition) > desired) {
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