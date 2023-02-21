function solve(inputString) {
    const regex = /[\w]+/gm;
    let match = inputString.match(regex);
    match = match.map(word => word.toUpperCase());
    console.log(match.join(', '));
}
solve('Hi, how are you?');