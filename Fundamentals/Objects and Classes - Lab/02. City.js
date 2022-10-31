function cityInfo(city) {
    for (const prop of Object.entries(city)) {
        let key = prop[0];
        let value = prop[1];
        console.log(`${key} -> ${value}`);
    }

}
cityInfo({

    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",

    postCode: "4000"

})