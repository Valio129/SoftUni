// #1
// function matching(word, missChar, matchable) {
//     let newWord = word.replace("_", missChar)
//     if (newWord === matchable) {
//         console.log("Matched");
//     } else {
//         console.log(`Not Matched`);
//     }
// }
//# 2
function matching(word, missChar, matchable) {
    let result = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "_") {
            result += missChar
        } else {
            result += word[i]
        }

    }
    if (result === matchable) {
        console.log("Matched");
    } else {
        console.log(`Not Matched`);
    }
}
matching('Str_ng', 'и', 'Strong')