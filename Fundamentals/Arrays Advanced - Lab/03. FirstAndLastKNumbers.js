function firstLastK(arr) {
    const k = arr.shift()
    let first = arr.slice(0, k)
    let last = arr.slice(-k)
    console.log(first.join(' '));
    console.log(last.join(' '));
}
firstLastK([2, 7, 8, 9])
firstLastK([3, 6, 7, 8, 9])