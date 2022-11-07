function sorterdCatalogue(productsArr) {
    let catalogue = {}
    productsArr.forEach(element => {
        [productName, productPrice] = element.split(' : ')
        catalogue[productName] = Number(productPrice)
    });

    let sortedArr = Object.entries(catalogue);
    sortedArr = sortedArr.sort((a, b) => a[0].localeCompare(b[0]));
    let prev = undefined
    sortedArr.forEach(element => {
        [productName, productPrice] = element;
        if (productName[0].toUpperCase() !== prev) {
            prev = productName[0].toUpperCase()
            console.log(prev);
        }
        console.log(`  ${productName}: ${productPrice}`);
    });
}
sorterdCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)
