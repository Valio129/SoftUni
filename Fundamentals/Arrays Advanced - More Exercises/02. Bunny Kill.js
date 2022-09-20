function killBunnies(array) {
    let bombs = array.pop().split(' ')
    let kills = 0
    let totalDmg = 0
    let temp = []
    for (let iterator of array) {
        iterator = iterator.split(' ').map(Number)
        temp.push(iterator)
    }
    array = temp.slice(0)
    for (let bomb of bombs) {
        bomb = bomb.split(',').map(Number)
        // console.log(bomb);
        let row = bomb[0]
        let col = bomb[1]
        let currArray = array[row]
        bombBunny = currArray[col] // location and dmg when it explodes
        kills++
        totalDmg += bombBunny
        let skipAbove, skipBellow = 0
        if (row >= array.length - 1) {
            skipBellow = 1
        }
        if (row <= 0) {
            skipAbove = 1

        }

        explode(array, row, bombBunny, col, skipAbove, skipBellow)

    }
    for (const iterator of array) {
        for (const it of iterator) {
            if (it > 0) {
                kills++
                totalDmg += it
            }
        }
    }
    console.log(totalDmg);
    console.log(kills);
    function explode(array, index, dmg, col, skipAbove, skipBellow) {
        let i = -1;
        if (skipAbove === 1) {
            i = 0
        }
        let end = 1
        if (skipBellow === 1) {
            end = 0
        }

        for (i; i <= end; i++) {
            let currLine = array[index + i]
            for (let j = -1; j <= 1; j++) {
                if (j + col >= 0 && j + col <= array.length - 1) {
                    currLine[j + col] -= dmg
                }
            }
        }

    }
}
killBunnies(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1'])
killBunnies(['10 10 10', '10 10 10', '10 10 10', '0,0'])