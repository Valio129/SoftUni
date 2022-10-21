function solve(array) {
    let houses = array.shift().split('@').map(Number)
    let token = array.shift().split(' ')
    let index = 0
    while (token[0] !== "Love!") {
        if (token[0] === "Jump") {
            let length = Number(token[1])
            if (length + index > houses.length - 1) {
                index = 0
            } else {
                index += length
            }

            if (houses[index] <= 0) {
                console.log(`Place ${index} already had Valentine's day.`);
            } else {
                houses[index] -= 2
                if (houses[index] <= 0) {
                    console.log(`Place ${index} has Valentine's day.`);
                }
            }
        }
        token = array.shift().split(' ')
    }
    console.log(`Cupid's last position was ${index}.`);
    let remainHousesCount = 0
    for (const place of houses) {
        if (place > 0) {
            remainHousesCount++
        }
    }
    if (remainHousesCount === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${remainHousesCount} places.`);
    }
}
solve(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])


