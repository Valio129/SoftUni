function mining(arr) {
    let mine = new Map()
    for (let i = 0; i <= arr.length - 1; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);
        if (mine.has(resource)) {
            quantity += mine.get(resource)
        }
        mine.set(resource, quantity)

    }
    for (let [key, value] of mine) {
        console.log(`${key} -> ${value}`);
    }
}
mining([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)