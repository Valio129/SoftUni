function solve(array) {
    let mainText = array.shift()
    array = array[0]
    for (const word of mainText.split(' ')) {
        if (word.startsWith('_') && word.endsWith('_')) {
            for (const text of array) {
                if (word === '_'.repeat(text.length)) {
                    mainText = mainText.replace(word, text)
                }
            }
        } else if (word.startsWith('_') && !word.endsWith('_')) {
            for (const text of array) {
                const compWord = word.substring(0, word.length - 1)
                if (compWord === '_'.repeat(text.length)) {
                    mainText = mainText.replace(compWord, text)
                }
            }
        }
    }
    console.log(mainText);
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)