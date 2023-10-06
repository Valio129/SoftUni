function getCards(deckArr) {
    let deck = [];
    for (const deckCard of deckArr) {
        const suit = deckCard[deckCard.length - 1];
        const card = deckCard.slice(0, deckCard.length - 1);
        try {
            deck.push(generateCard(card, suit).toString());
        } catch (error) {
            console.log('Invalid card: ' + deckCard);
            return
        }
    }
    console.log(deck.join(' '));
    function generateCard(card, suit) {
        const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
        if (!validCards.includes(card)) {
            throw new Error('invalid face: ' + card);
        }
        if (!Object.keys(validSuits).includes(suit)) {
            throw new Error('invalid suit: ' + suit);
        }
        return {
            'face': card,
            'suit': validSuits[suit],
            toString: function () {
                return `${this.face}${this.suit}`;
            }
        };
    }
}
getCards(['AS', '10D', 'KH', '2C', '1C']);