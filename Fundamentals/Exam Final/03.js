function solve(input) {
    input = input.slice(0, input.indexOf('EndDay'))
    let animals = {}
    let areas = {}

    for (const token of input) {
        let [command, args] = token.split(': ')
        if (command === "Add") {
            let [animalName, dailyFood, area] = args.split('-')
            dailyFood = Number(dailyFood)
            if (!areas.hasOwnProperty(area)) {
                areas[area] = []
            }
            if (!areas[area].includes(animalName)) {
                areas[area].push(animalName)
            }
            if (!animals.hasOwnProperty(animalName)) {
                animals[animalName] = { dailyFood, area }

            } else {
                animals[animalName].dailyFood += dailyFood
            }


        } else { // check else if
            let [animalName, food] = args.split('-')
            food = Number(food)
            if (animals.hasOwnProperty(animalName)) {
                animals[animalName].dailyFood -= food
                if (animals[animalName].dailyFood <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    const animalArea = animals[animalName].area
                    areas[animalArea] = areas[animalArea].filter(ell => ell !== animalName)
                    delete animals[animalName]
                }
            }
        }

    }
    //printing
    console.log('Animals:');
    for (const animal of Object.keys(animals)) {
        const quantity = animals[animal].dailyFood
        console.log(` ${animal} -> ${quantity}g `);
    }
    console.log('Areas with hungry animals:');
    for (const area of Object.keys(areas)) {
        const quantity = areas[area].length
        if (quantity > 0) {

            console.log(` ${area}: ${quantity}`);
        }
    }
}
solve(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"]
)

