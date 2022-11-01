//get data from arr and put it into the obj,
//then push the object into the heros arr
//sort arr by level in ascending order 
// 
function heroesStats(heroDataLis) {
    let heroesList = []
    for (let line of heroDataLis) {
        let [name, level, items] = line.split(' / ')
        let hero = { name, level, items }
        heroesList.push(hero);
    }
}
function compareLevels(a, b) {
    let keyA = a.level
    let keyB = b.level
    return keyA - keyB;
}
heroesList = heroesList.sort(compareLevels)


console.log(heroesList);


heroesStats([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)