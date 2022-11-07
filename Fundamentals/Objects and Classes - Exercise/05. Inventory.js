//get data from arr and put it into the obj,
//then push the object into the heros arr
//sort the objects by their level and push them into the array
function heroesStats(heroDataLis) {
    let heroesList = []
    for (let line of heroDataLis) {
        let [name, level, items] = line.split(' / ')
        let hero = { name, level: Number(level), items }
        heroesList.push(hero);
    }
    heroesList.sort((a, b) => a.level - b.level);

    heroesList.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })


}




heroesStats([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)