function solve(array) {
    let vehicles = array[0].split('>>')
    let totalTaxesSum = 0
    for (let vehicle of vehicles) {
        vehicle = vehicle.split(' ')
        const carType = vehicle[0]
        const years = Number(vehicle[1])
        const kilometers = Number(vehicle[2])
        let currTaxes = 0
        let initialTax = 0
        let eurosForYearsInUse = 0
        let eurosPerKilometer = 0
        let kmRange = 0
        switch (carType) {
            case 'family':
                initialTax = 50
                eurosForYearsInUse = 5
                eurosPerKilometer = 12
                kmRange = 3000
                break;

            case 'heavyDuty':
                initialTax = 80
                eurosForYearsInUse = 8
                eurosPerKilometer = 14
                kmRange = 9000
                break;

            case 'sports':
                initialTax = 100
                eurosForYearsInUse = 9
                eurosPerKilometer = 18
                kmRange = 2000
                break;

            default:
                console.log('Invalid car type.');
                continue;
                break;
        }
        currTaxes += initialTax
        currTaxes -= years * eurosForYearsInUse
        let kilosTravelled = parseInt(kilometers / kmRange)
        currTaxes += kilosTravelled * eurosPerKilometer
        totalTaxesSum += currTaxes
        console.log(`A ${carType} car will pay ${currTaxes.toFixed(2)} euros in taxes.`);

    }
    console.log(`The National Revenue Agency will collect ${totalTaxesSum.toFixed(2)} euros in taxes.`);
}
solve((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']))
console.log('--------------------------------------------------');
solve((['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']))