function solve(arr) {
    let offers = {}
    for (let offer of arr) {
        let [country, town, price] = offer.split(' > ')
        price = Number(price)
        if (!offers.hasOwnProperty(country)) {
            offers[country] = {}
        }
        if (!offers[country].hasOwnProperty(town)) {
            offers[country][town] = price
        } else {
            if (offers[country][town] > price) {
                offers[country][town] = price
            }
        }

    }
    for (const key of Object.keys(offers).sort((a, b) => a.localeCompare(b))) {
        let result = `${key} -> `
        let out = []
        for (let iterator of Object.keys(offers[key]).sort((a, b) => offers[key][a] - offers[key][b])) {
            out.push(`${iterator} -> ${offers[key][iterator]}`)
        }
        result += out.join(' ')
        console.log(result);
    }

}
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 12',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]

)