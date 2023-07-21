function calorieObj(foodArr) {
    let foods = {};
    for (let i = 0; i < foodArr.length; i += 2) {
        const food = foodArr[i];
        const cals = Number(foodArr[i + 1]);
        foods[food] = cals;
    }
    console.log(foods);
}
calorieObj(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']);
