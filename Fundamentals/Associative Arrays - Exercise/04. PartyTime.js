/** TO DO:
 * take first el from token and check it's type 
 */
function partyList(guestsArr) {
    let guests = new Map()
    let guestAssign = guestsArr.slice(0, guestsArr.indexOf('PARTY'))
    guestAssign.forEach(guestID => {
        let first = guestID.charCodeAt(0)
        if (first >= 48 && first <= 57) {
            guests.set(guestID, 'VIP')
        } else {
            guests.set(guestID, 'regular')
        }

    });
    for (const guest of guestsArr.slice(guestsArr.indexOf('PARTY') + 1)) {
        guests.delete(guest)

    }
    let sorted = Array.from(guests.entries()).sort(([anum, arole], [bnum, brole]) => {
        return arole.localeCompare(brole)
    }
    )
    console.log(sorted.length);
    for (const iterator of sorted) {
        console.log(iterator[0]);
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