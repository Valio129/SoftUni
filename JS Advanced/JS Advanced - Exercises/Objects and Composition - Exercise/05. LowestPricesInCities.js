//{productName} -> {productLowestPrice} ({townName})     OUTPUT placeholder
// " | " delimeter
function lowestPice(input) {
    let towns = { lowestPrice: {} };
    for (const data of input) {
        let [cityName, product, price] = data.split(' | ');
        price = Number(price);
        if (!towns.hasOwnProperty(cityName)) {
            towns[cityName] = {};
        }
        towns[cityName][product] = price;
        if (!towns.lowestPrice.hasOwnProperty(product)) {
            towns.lowestPrice[product] = {price, cityName};
        } else if (towns.lowestPrice[product].price > price) {
            towns.lowestPrice[product] = {price, cityName}
        }
    }
    const cheapestProductsLib = towns.lowestPrice;
    for (const {productName : {prodPrice, prodTown}} in cheapestProductsLib) {
        console.log(`${productName} -> ${prodPrice} (${prodTown}`);
    }
}
lowestPice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);