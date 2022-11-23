function cardGame(arr) {
    let decks = {}
    let powers = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }
    for (let token of arr) {
        let [person, currDeck] = token.split(': ')
        if (!decks.hasOwnProperty(person)) {
            decks[person] = {}
        }
        currDeck = currDeck.split(', ')
        for (let card of currDeck) {
            if (!decks[person].hasOwnProperty(card)) {
                let [power, type] = card.split('')
                if (card.length === 3) {
                    power = card[0].concat(card[1])
                    type = card[2]
                }
                if (isNaN(power)) {
                    power = powers[power]
                } else {
                    power = Number(power)
                }
                decks[person][card] = (power * powers[type])
            }
        }
    }
    for (let person in decks) {
        let currDeck = decks[person]
        let deckValue = 0
        for (let card in currDeck) {
            deckValue += currDeck[card]
        }
        decks[person] = deckValue
    }
    for (const el of Object.keys(decks)) {
        console.log(`${el}: ${decks[el]}`);
    }

}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]

)