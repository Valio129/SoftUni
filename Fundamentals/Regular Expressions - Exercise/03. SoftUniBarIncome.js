function solve(customer) {
    let pattern = /%(?<customer>(?:)[A-Z][a-z]*(?:))%<(?<product>[A-za-z]+)>\|(?<count>\d+)\|(?<price>\d+\.?\d*)\$/g
    let totalSum = 0

    for (const order of customer) {
        const matched = pattern.exec(order)
        const customerName = matched.groups["customer"]
        const price = ((Number(matched.groups["price"]) * Number(matched.groups["count"])))
       console.log(matched);
    }
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])