function wallTrack(sections) {
    sections.map(Number)
    let concrete = 0
    const concretePerYard = 195
    const pesosPerCubicYard = 1900
    let out = []
    let isBelow = (array, x) => {
        for (const iterator of array) {
            if (iterator < x) {
                return true
            }
        }
        return false
    }
    while (isBelow(sections, 30)) {
        let dailyConcrete = 0
        let counter = 0
        for (let index = 0; index < sections.length; index++) {
            if (sections[index] < 30) {
                sections[index] += 1
                counter++
            }
        }
        dailyConcrete = counter * concretePerYard
        out.push(dailyConcrete)
        concrete += dailyConcrete
    }
    console.log(out.join(', '));
    console.log(`${concrete * pesosPerCubicYard} pesos`);
}

wallTrack([21, 25, 28])
wallTrack([17])
wallTrack([17, 22, 17, 19, 17])
