function equalArrs(arrOne, arrTwo) {
    let isDif = false;
    let sum = 0
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            isDif = true;
            sum = i;
            break;
        } else {
            sum += Number(arrOne[i]);
        }
    }
    if (isDif) {
        console.log(`Arrays are not identical. Found difference at ${sum} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrs(['10', '20', '30'],

    ['10', '20', '30']);

equalArrs(['1', '2', '3', '4', '5'],

    ['1', '2', '4', '4', '5'])
equalArrs(['1'], ['10'])