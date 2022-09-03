function monitorCrystals(arr) {
    let ores = arr
    let targetMicrons = ores.shift()
    for (let chunk of ores) {
        let microns = chunk
        console.log(`Processing chunk ${microns} microns `);
        let operations = ["Cut", "Lap", "Grind", "Etch"]
        let isXavailable = true
        while (microns != targetMicrons) {
            const recommendedAction = recommendAction(operations, microns)
            let times = 0
            let compare = targetMicrons
            if (recommendedAction === "Etch") {
                while (operate(recommendedAction, microns) >= targetMicrons - 1) {
                    microns = operate(recommendedAction, microns)
                    times++
                }
            } else {

                while (operate(recommendedAction, microns) >= targetMicrons) {
                    microns = operate(recommendedAction, microns)
                    times++
                }
            }

            if (times > 0) {
                microns = Math.floor(microns)
                console.log(`${recommendedAction} x${times}`);

                console.log("Transporting and washing");
            }
            // console.log(microns);
            operations.splice(operations.indexOf(recommendedAction), 1)
            if (targetMicrons > microns) {
                if (isXavailable === true) {
                    microns += 1
                    console.log('X-ray x1');
                    isXavailable = false
                }
            }
        }
        console.log(`Finished crystal ${microns} microns`);

    }
    function recommendAction(list, currentValue) {
        let returnedAction;
        let smallest = Number.MAX_VALUE;
        for (action of list) {
            const resultFromCurrAction = operate(action, currentValue)
            if (resultFromCurrAction < smallest) {
                smallest = resultFromCurrAction
                returnedAction = action
            }
        }
        return returnedAction

    }

    function operate(operation, microns) {
        const command = operation
        let result = microns;
        switch (operation) {
            case "Cut":
                result /= 4
                break;
            case "Lap":
                result -= result * 0.2
                break;
            case "Grind":
                result -= 20
                break;
            case "Etch":
                result -= 2
                break;
            default:
                break;
        }
        return result
    }
}
monitorCrystals([1375, 50000])
console.log('===================');
monitorCrystals([1000, 4000, 8100])

// check if times > 0 => print times and math floor
//if is "Etch" => target -= 1 

