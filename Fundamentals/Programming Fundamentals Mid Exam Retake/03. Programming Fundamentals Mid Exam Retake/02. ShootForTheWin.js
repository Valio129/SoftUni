function solve(array) {
    let targets = array.shift().split(' ').map(Number);
    let shots = 0
    while (array[0] !== 'End') {
        let index = Number(array.shift());
        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            shots++
            let value = targets[index]
            for (let i = 0; i < targets.length; i++) {
                let el = targets[i];
                if (el !== -1) {
                    if (el > value) {
                        targets[i] -= value
                    } else if (el <= value) {
                        targets[i] += value
                    }
                }
            }
            targets[index] = -1
        }
    }
    console.log(`Shot targets: ${shots} -> ${targets.join(' ')}`);
}
solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
solve((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
)
