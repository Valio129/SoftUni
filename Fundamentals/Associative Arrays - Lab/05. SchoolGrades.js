function solve(arr) {
    let gradebook = {}
    for (let array of arr) {
        array = array.split(' ')
        let name = array.shift()
        array = array.map(Number)
        if (gradebook.hasOwnProperty(name)) {
            gradebook[name].push(...array)
        } else {
            gradebook[name] = array
        }
    }
    let sorted = Object.keys(gradebook).sort((a, b) => a.localeCompare(b))
    for (const student of sorted) {
        let score = (gradebook[student].reduce((a, b) => a + b, 0)) / gradebook[student].length
        console.log(`${student}: ${score.toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)