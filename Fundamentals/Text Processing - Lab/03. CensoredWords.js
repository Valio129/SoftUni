function solve(string, occurance) {
    while (string.includes(occurance)) {
        string = string.replace(occurance, "*".repeat(occurance.length))
    }
    console.log(string);
}
solve('A small sentence with some words small small small', 'small')