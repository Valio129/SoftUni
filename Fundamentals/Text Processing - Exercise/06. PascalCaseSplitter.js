function solve(input) {
    let output = ''
    for (let i = 0; i < input.length;  i++) {
        const char = input[i]
        if (char === char.toUpperCase()) {
            output += ', '    
        }
        output += char
    }
    console.log(output.substring(2));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
