function solve(input) {
    /*
    The length of each string will be in the range [1 … 20].
    first regexp ->  /(?<text>[^0-9]+)(?<count>\d+)/g
    second regex -> [A-Za-z] matching exaclty one letter
        from it we can get the length of the match
        this length is the count of unique symbols 
        /[A-Za-z]/ -> returns arr
            loop arr and get unique el-s
                - by pushing them intp new arr olny if it doesn't 
                include it  
    */
    const regex1 = /(?<text>[^0-9]+)(?<count>\d+)/g
    const matches = input.match(regex1)
    let out = ''
    let tempArr = []
    for (const match of matches) {
        let text = match.match(/(?<text>[^0-9]+)/g).join('').toLowerCase()
        const count = Number(match.match(/\d+/))
        // get symbols count
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            if (!tempArr.includes(element)) {
                tempArr.push(element)
            }
        }
        out += text.toUpperCase().repeat(count)
    }
    const uniqueSymbolsCount = tempArr.length
    console.log(`Unique symbols used: ${uniqueSymbolsCount}`, '\n', out);
}
solve('aSd2&5s@1')