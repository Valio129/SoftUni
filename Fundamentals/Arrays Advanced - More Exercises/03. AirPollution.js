function airPollution(map, forcesArr) {
    map = map.map(str => str.split(' ').map(Number))
    for (let element of forcesArr) {
        element = element.split(' ')
        let force = element[0]
        let index = Number(element[1])
        let pm = 0
        switch (force) {
            case 'breeze':
                pm = 15
                for (let i = 0; i <= 4; i++) {
                    map[index][i] -= pm
                    if (map[index][i] < 0) {
                        map[index][i] = 0
                    }
                }
                break
            case 'gale':
                pm = 20
                for (let i = 0; i <= 4; i++) {
                    map[i][index] -= pm
                    if (map[index][i] < 0) {
                        map[index][i] = 0
                    }
                }
                break;
            case 'smog':
                pm = index
                for (let row = 0; row <= 4; row++) {
                    for (let col = 0; col <= 4; col++) {
                        map[row][col] += pm
                    }
                }
            default:
                continue;
        }
    }
    let pollutedBlocks = []
    for (let row = 0; row <= 4; row++) {
        let place = ''
        for (let col = 0; col <= 4; col++) {
            if (map[row][col] >= 50) {
                place = `[${row}-${col}]`
                pollutedBlocks.push(place)
            }
        }
    }
    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}
// airPollution(['5 7 72 14 4',

//     '41 35 37 27 33',

//     '23 16 27 42 12',

//     '2 20 28 39 14',

//     '16 34 31 10 24'],

//     ['breeze 1', 'gale 2', 'smog 25'])
airPollution(['5 7 3 28 32',

    '41 12 49 30 33',

    '3 16 20 42 12',

    '2 20 10 39 14',

    '7 34 4 27 24'],

    [])