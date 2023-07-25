function sortedCatalogue(products) {
    // iterate through the input arr 
    // process data
    // check if obj has property  product[0] 
    // if not -> create obj propery {name : price}
    // put inside the right catalogue obj property 
    // sorting
    // for every property by Letter 
    // get the letter's obj keys and sort them   

    let catalogue = {};
    for (const product of products) {
        let [name, price] = product.split(' : ');
        price = Number(price);
        if (!catalogue.hasOwnProperty(name[0])) {
            catalogue[name[0]] = {};
        }
        catalogue[name[0]][name] = price;
    }
    let sortedLetters = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (const letter of sortedLetters) {
        const sectionObj = catalogue[letter];
        let sortedList = Object.entries(sectionObj).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(letter);
        sortedList.forEach(a => console.log(` ${a[0]}: ${a[1]}`));
    }
}
sortedCatalogue(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);