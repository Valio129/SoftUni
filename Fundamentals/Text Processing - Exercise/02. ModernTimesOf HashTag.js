function solve(text) {
    text = text.split(' ')
    let output = []
    text.forEach(word => {
        let isValidWord = word.startsWith('#') && word.length > 1
        if (isValidWord) {
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase()

                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isValidWord = false;
                    break;
                }

            }
            if (isValidWord) {
                word = word.substring(1)
                output.push(word)
            }
        }

    })
    console.log(output.join('\n'));
}
solve('The symbol # is known #1variously in English-speaking #regions as the #number sign')