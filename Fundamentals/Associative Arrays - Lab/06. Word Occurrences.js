function solve(arr) {
    let obj = {}
    for (const el of arr) {
        if (obj.hasOwnProperty(el)) {
            obj[el] = obj[el] + 1
        } else {
            obj[el] = 1
        }
    }
    let sorted = Object.entries(obj)
    sorted = sorted.sort((a,b) => b[1] - a[1])
    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}
solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])