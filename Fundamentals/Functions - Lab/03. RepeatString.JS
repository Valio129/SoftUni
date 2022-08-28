function repeat(word, count) {
    let out = ""
    for (let index = 1; index <= count; index++) {
        out += word

    }
    return out
}
console.log(repeat("abc", 3));