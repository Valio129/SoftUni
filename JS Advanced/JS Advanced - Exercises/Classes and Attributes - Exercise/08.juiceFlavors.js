function juiceFlavors(flavorsArr) {
    const flavors = new Map();
    const out = new Map()
    for (let flavorName of flavorsArr) {
        let [flavor, quantity] = flavorName.split(' => ');
        quantity = Number(quantity);
        if (!flavors.has(flavor)) {
            flavors.set(flavor, { quantity: 0, 'bottles': 0 });
        }
        const flavObj = flavors.get(flavor);
        flavObj['quantity'] += quantity;
        while (flavObj['quantity'] >= 1000) {
            flavObj['bottles']++;
            flavObj['quantity'] -= 1000;
            if (flavObj['bottles'] == 1) {
                out.set(flavor,flavObj);
            }
        }
    }
    for (const flavKey of Array.from(out.keys())) {
        const flavorObj = flavors.get(flavKey);
        if (flavorObj['bottles'] > 0) {
            console.log(`${flavKey} => ${flavorObj['bottles']}`);
        }
    }
}
juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);