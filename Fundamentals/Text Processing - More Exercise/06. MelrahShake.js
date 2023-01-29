function solve(array) {
    let text = array[0]
    let pattern = array[1]
    while (text.includes(pattern) && pattern !== '') {
        const regex = new RegExp(`(?<patterns>${pattern})`, 'g')
        let match = [...text.matchAll(regex)]
        // left match
        const leftMatchStartIndex = text.indexOf(pattern)
        const leftMatchEndIndex = text.indexOf(pattern) + pattern.length - 1
        // right match
        const rightMatchStartIndex = match[match.length - 1].index
        const rightMatchEndIndex = rightMatchStartIndex + pattern.length - 1
        //cut matches
        if ((rightMatchStartIndex === rightMatchStartIndex &&
            leftMatchEndIndex === rightMatchEndIndex)) {
            break;
        }
        text = text.split('')
        text.splice(rightMatchStartIndex, pattern.length)
        text.splice(leftMatchStartIndex, pattern.length)
        text = text.join('')
        const letter = pattern[(parseInt(pattern.length / 2))]
        if (pattern.includes(letter)) {
            pattern = pattern.replace(letter, '')
        }
        console.log('Shaked it.');
    }
    console.log('No shake.');
    console.log(text);
}

solve( ['stastasasssastasta', 'sta'] )
solve(['##mtm!!mm.mm*mtm.#',

    'mtm'])