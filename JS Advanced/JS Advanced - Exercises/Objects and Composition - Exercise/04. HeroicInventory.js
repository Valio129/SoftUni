function heroRegister (heroData) {
    let register = [];
    for (const data of heroData) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items? items = items.split(', ') : [];
        register.push({name, level, items});
    }
    console.log(JSON.stringify(register));

}
heroRegister(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)