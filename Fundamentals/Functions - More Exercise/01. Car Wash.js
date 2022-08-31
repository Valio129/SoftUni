function carWash(commandsArr) {
    let cleanProc = 0
    for (let currCommand of commandsArr) {
        switch (currCommand) {
            case 'soap':
                cleanProc += 10
                break;
            case 'water':
                cleanProc += cleanProc * 0.2
                break;
            case 'vacuum cleaner':
                cleanProc += cleanProc * 0.25
                break;
            case 'mud':
                cleanProc -= cleanProc * 0.1
                break;
            default:
                break;
        }
    }
    const value = `The car is ${(cleanProc.toFixed(2))}% clean.`
    return value
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"]));
