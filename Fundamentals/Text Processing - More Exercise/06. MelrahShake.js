function solve(array) {
    let text = array[0]
    let pattern = array[1]
    while (text.includes(pattern)) {
        let regex = new RegExp(`(?<patterns>${pattern})`, 'g')
        let match = [...text.matchAll(regex)]
        // left match
        const leftMatchStartIndex = text.indexOf(pattern)
        const leftMatchEndIndex = text.indexOf(pattern) + pattern.length
        // right match
        const rightMatchStartIndex = match[match.length - 1].index
        const rightMatchEndIndex = rightMatchStartIndex + pattern.length
        //cut matches
        if ((rightMatchStartIndex === rightMatchStartIndex &&
            leftMatchEndIndex === rightMatchEndIndex)) {
            break;
        }
        text = text.split('')
        text.splice(rightMatchStartIndex, (rightMatchEndIndex - rightMatchStartIndex))
        text.splice(leftMatchStartIndex, (leftMatchEndIndex - leftMatchStartIndex))
        text = text.join('')
        const letter = pattern[(parseInt(pattern.length / 2))]
        pattern = pattern.replace(letter, '')
        console.log('Shaked it.');
    }
    console.log('No shake.');
    console.log(text);
}

solve(['astalavista baby',

    'sta'])
solve(['##mtm!!mm.mm*mtm.#',

    'mtm'])