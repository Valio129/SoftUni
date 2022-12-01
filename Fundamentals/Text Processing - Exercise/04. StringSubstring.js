function solve(word, text) {
    word = word.toLowerCase()
    text = text.toLowerCase().split(' ')
    if (text.includes(word)) {
        console.log(word);
    } else { 
        console.log(`${word} not found!`);
    }
}
solve('javascript',
    ' is the best programming language')