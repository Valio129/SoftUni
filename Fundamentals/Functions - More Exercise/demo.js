function monitorCrystals(arr) {
    let ores = arr
    const targetMicrons = ores.shift()
    for (let chunk of ores) {
        let microns = chunk
        console.log(`Processing chunk ${microns} microns `);
        let operations = ["Cut", "Lap", "Grind", "Etch", "X-ray", "transportAndWash"]
        let largesAmount = Number.MIN_VALUE
        let reccomendedCommand = ""
        for (let command of operations) {
            let commandAction = operate(command, microns)
            if (commandAction > largesAmount) {
                largesAmount = commandAction
                reccomendedCommand = command
            }
            console.log(command);
        }
        //execute reccomendedComm
        // remove from the array of commands
        // do it again
    }

    function operate(operation, microns, printOrNot) {
        const command = operation
        let result = microns;
        switch (operation) {
            case "Cut":
                result /= 4
                break;

            default:
                break;
        }
        if (printOrNot === "y") { console.log(`${operation} x ${times}`); }
        return result
    }
}
monitorCrystals([1375, 50000])