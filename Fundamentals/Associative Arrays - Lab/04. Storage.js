/**
 *assign splitted elements to the map 
    if item already exists : add it's value to the present one
 */
function itemStorage(arr) {
    let storage = new Map()
    arr.forEach(element => {
        [item, quantity] = element.split(' ')
        if (storage.has(item)) {
            let currValue = Number(storage.get(item))
            let newQuan = currValue + Number(quantity)
            storage.set(item, newQuan)
        } else {
            
            storage.set(item, Number(quantity))
        }
    });
    for (const [item, value] of storage) {
        console.log(`${item} -> ${value}`);
    }
}
itemStorage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)