function enigma(array) {
    const count = array.shift()
    let attacked = []
    let destroyed = []
    let decryptReg = /[starSTAR]/g
    let lineReg = /([^@:!\->]*)@(?<planetName>[A-Za-z]+)(?:[^@:!\->]*):(?<population>\d+)!(?<attackType>[AD])!(?:[^@:!\->]*)->(?<soldierCount>\d+)(?:[^@:!\->]*)/
    for (let i = 0; i < count; i++) {
        let line = array[i]
        let charValue = line.match(decryptReg)
        if (charValue !== null) {
            charValue = charValue.length
            line = line.split('')
                .map(ch => {
                    const nCharCode = line.charCodeAt(line.indexOf(ch)) - charValue
                    ch = String.fromCharCode(nCharCode)
                    return ch
                })
                .join('')
        }

        if (lineReg.test(line)) {
            let out = lineReg.exec(line)

            const attack = out.groups.attackType
            const planetName = out.groups.planetName
            if (attack === 'A') {
                attacked

                    .push(planetName)
            } else {

                destroyed

                    .push(planetName)
            }
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        attacked
            .sort((a, b) => a.localeCompare(b))
            .map(planetName => console.log(`-> ${planetName}`))
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length > 0) {
        destroyed
            .sort((a, b) => a.localeCompare(b))
            .map(planetName => console.log(`-> ${planetName}`))
    }

}
enigma(['2',
    'CDoghudd4=63333$D$053333',
    'EHfsytsnhf?8555&I&2C9555SR'])