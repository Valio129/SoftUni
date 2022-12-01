function solve(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let inputs = ''
    let lett = 0
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (alphabet.includes(element.toLowerCase())) {
            inputs += element
            lett++
            if (lett == 2) {
                lett = 0
                inputs += ' '
            }
        } else if (typeof Number(element) === 'number' && element !== ' ') {
            inputs += element
        }

    }
    inputs = inputs.trim().split(' ')

    let sum = 0
    for (let input of inputs) {
        let lettBefore = input[0]
        let lettAter = input[input.length - 1]
        let value = Number(input.substring(1, input.length - 1))
        const positionFirst = (alphabet.indexOf(lettBefore.toLowerCase())) + 1
        const positionLast = (alphabet.indexOf(lettAter.toLowerCase())) + 1
        if (lettBefore === lettBefore.toUpperCase()) {
            sum += value / positionFirst
        } else {
            sum += value * positionFirst
        }

        if (lettAter === lettAter.toUpperCase()) {
            sum -= positionLast
        } else {
            sum += positionLast
        }
    }
    console.log(`${(sum).toFixed(2)}`);
}
solve('P34562Z q2576f   H456z')