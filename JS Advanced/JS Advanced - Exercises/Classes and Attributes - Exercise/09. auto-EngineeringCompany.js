function autoCompany(inputArr) {
    const carRegister = new Map();
    for (const el of inputArr) {
        let [brand, model, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);
        if (!carRegister.has(brand)) {
            carRegister.set(brand, new Map());
            const carBrandMap = carRegister.get(brand);
            carBrandMap.set(model, producedCars);
        } else {
            const carBrandMap = carRegister.get(brand);
            if (!carBrandMap.has(model)) {
                carBrandMap.set(model, producedCars);
            } else {
                const num = carBrandMap.get(model);
                carBrandMap.set(model, producedCars + num);
            }
        }
    }
    for (const brandKeyMap of carRegister.keys()) {
        console.log(brandKeyMap);
        const currBrandMap = carRegister.get(brandKeyMap);
        for (const model of currBrandMap.keys()) {
            console.log(`###${model} -> ${currBrandMap.get(model)}`);
        }
    }
}
autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);