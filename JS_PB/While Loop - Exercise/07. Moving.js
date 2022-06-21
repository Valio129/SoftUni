function solve(params) {
    let i = 0
    let width = Number(params[i])
    let height = Number(params[++i])
    let length = Number(params[++i])

    const initFreeSpace = height * width * length;
    let freeSpace = initFreeSpace;
    let input = params[++i]
    while (input !== "Done" && freeSpace > 0) {
        let currentBoxes = Number(input)
        freeSpace -= currentBoxes;
        input = params[++i]
    }
    if (freeSpace > 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }

} solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
