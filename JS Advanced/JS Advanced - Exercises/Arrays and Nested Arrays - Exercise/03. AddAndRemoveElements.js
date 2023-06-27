function solve(arr) {
    let outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'add':
                outputArr.push(i + 1);
                break;
            case 'remove':
                outputArr.pop();
                break;
            default:
                break;
        }

    }
    if (outputArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(outputArr.join('\n'));
    }
}
solve(['remove',
    'remove',
    'remove']

);