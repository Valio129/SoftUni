function solve(input = []) {
    const regex1 = /([\D]+)(\d+)/g
    const matches = input.shift().match(regex1)
    let out = ''
    let tempArr = []
    for (const match of matches) {
        let text = (/([\D]+)/g).exec(match)[0].toLowerCase()
        const count = Number(/\d+/.exec(match))
        out += text.toUpperCase().repeat(count)
    }
    for (let i = 0; i < out.length; i++) {
        const element = out[i];
        if (!tempArr.includes(element)) {
            tempArr.push(element)
        }
    }
    const uniqueSymbolsCount = tempArr.length
    console.log(`Unique symbols used: ${uniqueSymbolsCount}`);
    console.log(out);
}
solve('a3')