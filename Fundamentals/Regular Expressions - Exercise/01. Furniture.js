function solve(items) {
    let pattern = />{2}(?<productName>[A-Z]+[a-z]*)<{2}(?<productPrice>\d+.?\d*)!(?<quantity>\d+)/g
    let validItems = items.slice(0, items.indexOf('Purchase')).join(', ')
        .matchAll(pattern)
    let sum = 0
    console.log('Bought furniture:');
    for (const item of validItems) {
        if (item !== null) {
            console.log(`${item.groups['productName']}`);
            sum += item.groups["quantity"] * item.groups["productPrice"]
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)