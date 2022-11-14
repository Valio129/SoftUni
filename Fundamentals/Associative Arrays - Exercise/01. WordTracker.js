function solve(arr) {
    let obj = {
    }
    let targetWords = arr.shift().split(' ')
    for (const el of targetWords) {
        obj[el] = 0
    }
    for (const el of arr) {
        if (obj.hasOwnProperty(el)) {
            obj[el] = obj[el] + 1
        }
    }
    let sorted = Object.entries(obj)
    sorted = sorted.sort((a, b) => b[1] - a[1])
    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)