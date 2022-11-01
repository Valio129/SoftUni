function solve(productsInStock, orderedProducts) {
    let array = productsInStock.concat(orderedProducts)
    let products = {}

    while (array.length > 0) {
        const currName = array.shift()
        const currQuant = Number(array.shift())
        if (!Object.keys(products).includes(currName)) {
            products[currName] = currQuant
        } else (
            products[currName] += currQuant
        )
    }
    for (const [product, quantity] of Object.entries(products)) {
        console.log(`${product} -> ${quantity}`);
    }
}




solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)