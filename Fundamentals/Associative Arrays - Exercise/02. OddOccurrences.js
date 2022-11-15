function solve(sentance) {
    sentance = sentance.toLowerCase().split(' ')
    let obj = new Map()
    for (const el of sentance) {
        if (obj.has(el)) {
            obj.set(el, obj.get(el) + 1)
        } else {
            obj.set(el, 1)
        }
    }
    let sorted = []
    for (const [key, value] of obj) {
        if (value % 2 !== 0) {
            if (!sorted.includes(key)) {
                sorted.push(key)
            }
        }
    }
    console.log(sorted.join(' '));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')