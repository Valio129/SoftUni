function magicPairs(array, num) {

    for (let indexNum = 0; indexNum < array.length; indexNum++) {
        let curEle = array[indexNum]
        for (let currNum = indexNum + 1; currNum < array.length; currNum++) {
            let nextEle = array[currNum]
            let sum = curEle + nextEle
            if (sum === num) {
                console.log(`${curEle} ${nextEle}`);
            }
        }

    }
}
// magicPairs([7, 2], 0)
magicPairs([1, 7, 6, 2, 19, 23],

    8)
// magicPairs([14, 20, 60, 13, 7, 19, 8],

//     27)
// magicPairs([1, 2, 3, 4, 5, 6],

//     6)
