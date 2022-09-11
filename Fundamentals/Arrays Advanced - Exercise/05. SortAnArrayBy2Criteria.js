function orderByLength(input) {
    let res = input.sort((a, b) => a.localeCompare(b))
    res = res.sort((a, b) => a.length - b.length)
    console.log(res.join('\n'));
}
orderByLength(['alpha', 'beta', 'gamma'])
orderByLength(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])