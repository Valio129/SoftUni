function solve(string, occurance) {
    let counter = 0
    for (const iterator of string.split(' ')) {
        if (iterator === occurance) {
            counter++
        }
    }
    console.log(counter);
}
solve('This is a word and it also is a sentence',
    'is'
)