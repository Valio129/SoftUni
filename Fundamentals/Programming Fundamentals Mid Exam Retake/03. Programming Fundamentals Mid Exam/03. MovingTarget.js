//  check for valid index and consider it shot if it's value is < 0 
//  
function solve(array) {
    let targets = array.shift().split(' ').map(Number)
    while (array[0] !== 'End') {
        let token = array.shift().split(' ')
        const command = token[0]
        const index = Number(token[1])
        const value = Number(token[2])
        switch (command) {
            case 'Shoot':
                if (index >= 0 && index < targets.length) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1)
                    }
                }
                break;
            case 'Add':
                if (index >= 0 && index < targets.length) {

                    targets.splice(index, 0, value)
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (index >= 0 && index < targets.length) {
                    if (index - value >= 0) {
                        targets.splice(index - value, (1 + (value * 2)))
                    } else {
                        console.log('Strike missed!');
                    }
                } else {
                    console.log('Strike missed!');
                }
                break;

            default:
                break;
        }
    }
    console.log(targets.join('|'));
}
solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 1 9999999",
    "End"])
// solve((["1 2 3 4 5",
//     "Strike 0 1",
//     "End"])
// )
