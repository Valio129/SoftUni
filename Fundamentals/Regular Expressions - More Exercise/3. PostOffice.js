function solve(input) {
    let [firstPart, secondPart, thirdPart] = input.split('|')
    let capLettersArr = firstPart.match(/([$#%*&])([A-Z]+)\1/)[2].split('')
    secondPart = secondPart.match(/[0-9]+:[0-9]{2}/g)
    let wordsArr = []
    for (let part of secondPart) {
        let [capLetter, length] = part.split(':').map(Number)
        capLetter = String.fromCharCode(capLetter)
        if (capLettersArr.includes(capLetter)) {
            wordsArr.push([capLetter, length])
        }
    }
    thirdPart = thirdPart.split(' ')
    for (let pair of wordsArr) {
        const [letter, length] = pair
        for (const word of thirdPart) {
            if (word.startsWith(letter) && word.length === length + 1) {
                console.log(word);
            }
        }
    }
}
solve(sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos)