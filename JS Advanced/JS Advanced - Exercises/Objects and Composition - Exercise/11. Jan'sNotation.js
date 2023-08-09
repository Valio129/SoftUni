function solve(input) {
    let arr = [];
    for (const el of input) {
        if (typeof el == 'number') {
            arr.push(el);
        } else {
            const num2 = arr.pop();
            const num1 = arr.pop();
            let result;
            switch (el) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:

                    break;
            }
            arr.push(result);
        }
    }
    let output;
    if (arr.length == 1 && isNaN(arr[0]) === false) {
        output = arr[0];
    } else if (arr.length >= 2) {
        output = 'Error: too many operands!';
    } else if (!(arr.every(el => typeof el === NaN))) {
        output = 'Error: not enough operands!';
    }
    console.log(output);
}
solve([3,
    4,
    '+']
);
solve([5,
    3,
    4,
    '*',
    '-']
);
solve([7,
    33,
    8,
    '-']);
solve([15,
    '/']
);