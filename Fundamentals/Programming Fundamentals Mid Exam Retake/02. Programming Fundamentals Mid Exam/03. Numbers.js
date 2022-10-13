function solve(input) {
    let array = input.split(' ').map(Number);
    let avg = 0
    for (const el of array) {
        avg += el;
    }
    avg /= array.length;
    let topDigits = []
    array.sort((a, b) => b - a)
    for (const el of array) {
        if (el > avg) {
            if (topDigits.length < 5) {
                topDigits.push(el)
            } else {
                break;
            }
        }
    }
    if (topDigits.length > 0) {
        console.log(topDigits.join(' '));
    } else {
        console.log('No');
    }
}
solve('10 20 30 40 50')
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')