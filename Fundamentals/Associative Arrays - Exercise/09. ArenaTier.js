function arena(input) {
    input = input.slice(0, input.indexOf('Ave Cesar'))
    let gladPool = new Map()
    for (let token of input) {
        if (token.split(' ').includes('vs')) {
            token = token.split(' ')
            let first = token[0]
            let second = token[2]
            if (gladPool.has(first) && gladPool.has(second)) {
                first = gladPool.get(first)
                second = gladPool.get(second)
                firstEquipment = Object.keys(first)
                secondEquipment = Object.keys(second)
                for (const tech of firstEquipment) {
                    if (secondEquipment.includes(tech)) {
                        if (first[tech] > second[tech]) {
                            gladPool.delete(token[2])
                            break;
                        } else {
                            gladPool.delete(token[0])
                            break;
                        }
                    }
                }
            }
        } else {
            let [name, tech, skill] = token.split(' -> ')
            skill = Number(skill)
            if (!gladPool.has(name)) {
                // if there is no
                let currProps = {}
                currProps[tech] = skill
                gladPool.set(name, currProps)
            } else {
                let currGlad = gladPool.get(name)
                if (!currGlad.hasOwnProperty(tech)) {
                    currGlad[tech] = skill
                } else {
                    if (currGlad[tech] < skill) {
                        currGlad[tech] = skill
                    }
                }
            }
        }

    }
    let sorted = Array.from(gladPool.keys())
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => getMaxSkill(gladPool.get(b)) - getMaxSkill(gladPool.get(a)))

    /** every gladiator descending
     *   -sorted by max Skill and then by name
     *      for every gladiator skills 
     *          - sorted by skill desc and then sorted by name
     */

    for (let gladiator of sorted) {
        console.log(`${gladiator}: ${getMaxSkill(gladPool.get(gladiator))} skill`);
        let sortedTechs = Object.keys(gladPool.get(gladiator))
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => gladPool.get(gladiator)[b] - gladPool.get(gladiator)[a])
        for (const technique of sortedTechs) {
            console.log(`- ${technique} <!> ${gladPool.get(gladiator)[technique]}`);
        }
    }

    function getMaxSkill(obj) {
        let result = 0
        for (const value in obj) {
            result += obj[value]
        }
        return result
    }

}

arena([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]


)