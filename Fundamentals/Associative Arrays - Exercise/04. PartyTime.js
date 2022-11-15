/** TO DO:
 * take first el from token and check it's type 
 */
function partyList(guestsArr) {
    let vipList = []
    let regularList = []

    let guestAssign = guestsArr.slice(0, guestsArr.indexOf('PARTY'))
    guestAssign.forEach(guestID => {
        let first = guestID[0]
        // isNaN() -> 
        if (isNaN(first)) {
            regularList.push(guestID)
        } else {
            vipList.push(guestID)
        }

    });
    let guests = vipList.concat(regularList)
    for (const guest of guestsArr.slice(guestsArr.indexOf('PARTY') + 1)) {
        let index = guests.indexOf(guest)
        guests.splice(index, 1)
        }
    console.log(guests.length);
    for (const iterator of guests) {
        console.log(iterator);
    }


}
partyList(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]

)