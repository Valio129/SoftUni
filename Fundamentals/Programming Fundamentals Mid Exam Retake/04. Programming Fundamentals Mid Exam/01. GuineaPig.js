function solve(array) {
    let arr = array.slice(0).map(Number).map(x => x * 1000);
    let food = arr.shift()
    let hay = arr.shift()
    let cover = arr.shift()
    let weight = arr.shift()
    let isNotEnough = false;
    for (let day = 1; day <= 30; day++) {
        food -= 300;
        if (food <= 0) {
            isNotEnough = true;
            break;
        }
        if (day % 2 === 0) {
            hay -= 0.05 * food;
            if (hay <= 0) {
                isNotEnough = true;
                break;
            }
        }
        if (day % 3 === 0) {
            cover -= weight / 3;
            if (cover <= 0) {
                isNotEnough = true;
                break;
            }
        }

    }
    if (isNotEnough === true) {
        console.log('Merry must go to the pet store!');
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
// solve(["10",
//     "5",
//     "5.2",
//     "1"])

// solve(["1",
//     "1.5",
//     "3",
//     "1.5"
// ])
solve(["9",
    "5",
    "5.2",
    "1"])
