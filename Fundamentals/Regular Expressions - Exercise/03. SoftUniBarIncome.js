function solve(customers) {
    let pattern =
        /%(?<customer>[A-Z][a-z]+)%([^?.%|]{0,})<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>\d+\.?\d*)\$/m
    let totalSum = 0
    customers = customers.slice(0, customers.indexOf('end of shift'))
    for (const order of customers) {
        let matched = pattern.exec(order)
        if (matched) {
            const customerName = matched.groups["customer"]
            const productName = matched.groups["product"]
            const totalPrice = ((Number(matched.groups["price"]) * Number(matched.groups["count"])))
            console.log(`${customerName}: ${productName} - ${totalPrice.toFixed(2)}`);
            totalSum += totalPrice
        }

    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])