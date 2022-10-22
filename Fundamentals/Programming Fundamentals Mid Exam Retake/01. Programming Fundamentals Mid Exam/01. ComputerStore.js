function solve(array) {
    let taxesSum = 0;
    let totalSum = 0;
    //recieve prices (MUST be valid otherwise print invalid price) and go on
    for (let i = 0; i < array.length - 1; i++) {
        let price = Number(array[i]);
        if (price >= 0) {
            totalSum += price;
            taxesSum += price * 0.2;
        } else {
            console.log('Invalid price!');
        }

    }
    let onlyParts = totalSum
    totalSum += taxesSum;
    if (array[array.length - 1] === "special") {
        totalSum -= totalSum * 0.1;
    }

    if (totalSum > 0) {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${((onlyParts).toFixed(2))}$
        Taxes: ${(taxesSum).toFixed(2)}$
        -----------
        Total price: ${totalSum.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
    //at the end of each pice we get 20% of the prices value as a tax
    //check for special customer ->  - 10 % discount
    //check for valid total price

}
// solve([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30', 'regular'
// ])
solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])

