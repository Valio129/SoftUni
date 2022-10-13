// take array[0]
// split array by token in format: {command} {index1} {index2}
// print elements
function solve(arr) {
    let array = arr.shift().split(' ').map(Number);
    for (let token of arr) {
        token = token.split(' ')
        const command = token[0];
        const index1 = Number(token[1]);
        const index2 = Number(token[2]);
        switch (command) {
            case 'swap':
                let temp = array[index1]
                array[index1] = array[index2]
                array[index2] = temp
                break;
            case 'multiply':
                array[index1] = array[index1] * array[index2];
                break;
            case 'decrease':
                const sample = array.map(x => x - 1);
                array = sample.splice(0)
                break;
            default:
                break;
        }
    }
    console.log(array.join(', '));
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)