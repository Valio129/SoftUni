function solve(words, text) {
    words = words.split(', ')
    for (const word of words) {
        let match = `${'*'.repeat(word.length)}`
        text = text.replace(match, word)
    }
    console.log(text);
}
// solve('great',
//     'softuni is ***** place for learning new programming languages'
// )
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)