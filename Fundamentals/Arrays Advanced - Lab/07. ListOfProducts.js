function productList(products) {
    let list = products.sort()
    for (let index = 0; index < list.length; index++) {
        console.log(`${index + 1}.${list[index]}`);
    }
}
productList(['Watermelon', 'Banana', 'Apples'])