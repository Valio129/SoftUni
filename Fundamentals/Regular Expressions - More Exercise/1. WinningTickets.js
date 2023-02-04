function solveWinningTickets(input) {
    const ticketsArr = input.split(',').map(word => word.trim())
    const regexp = /([@#$^]{6,10})/g
    for (const ticket of ticketsArr) {
        let out = 'invalid ticket';
        if (ticket.length === 20) {
            out = `ticket "${ticket}" - no match`
            let left = ticket.substring(0, ticket.length / 2).match(regexp)
            let right = ticket.substring(ticket.length / 2).match(regexp)
            if (left !== null && right !== null) {
                left = left.toString()
                right = right.toString()
                let length = left.length
                if (right.length < left.length) {
                    length = right.length
                }
                out = out.replace('no match', `${length}${left[0]}`)
                if (left.length === 10 && right.length === 10) {
                    out += ' Jackpot!'
                }
            }
        }
        console.log(out);
    }
}

// solveWinningTickets('Cash$')
// solveWinningTickets('$$$$$$$$$$$$$$$$$$$$, $$$$$$$$$$@@@@@@@@@@')
solveWinningTickets('$$$$$$$$$$$$$$$$$$$$, aabb , @@@$$$$$$$@@@@@@@@@@')
