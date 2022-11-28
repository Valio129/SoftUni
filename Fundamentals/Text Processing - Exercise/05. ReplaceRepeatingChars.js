function solve(input) {
    let arr = input.split('')
    let currChar = arr[0]
    let counter = 0
    for (let i = 0; i <= arr.length; i++) {
        let char = arr[i]
        if (char === currChar) {
            counter++
        } else {
            const word = `${currChar.repeat(counter)}`
            input = input.replace(word, currChar)
            currChar = char
            counter = 1
        }
    }
    console.log(input);
}
solve('qqqwerqwecccwd')