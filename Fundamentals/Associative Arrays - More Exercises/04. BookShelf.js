function solveBookShelf(input) {
    /**
     * shelves  {
     * id: genre
     * }
     * 
     * }
     */
    let shelves = new Map
    let ids = []
    for (let token of input) {
        if (token.split(' ').includes('->')) {
            let [id, genre] = token.split(' -> ')
            let shelf = { id, genre }
            if (!ids.includes(id)) {
                ids.push(id)
                shelves.set(shelf, [])
            }
        } else {
            let [bookTitle, author] = token.split(': ')
            author = author.split(', ')
            const genre = author[1]
            author = author[0]
            let book = { bookTitle, author }
            for (let shelf of shelves.keys()) {
                if (shelf.genre === genre) {
                    shelves.get(shelf).push(book)
                }
            }
        }
    }
    let sortedShelves = Array.from(shelves.keys())
        .sort((a, b) => {
            let A = shelves.get(a).length
            let B = shelves.get(b).length
            return B - A
        })

    for (const shelfObj of sortedShelves) {
        const id = shelfObj.id
        const genre = shelfObj.genre
        const count = shelves.get(shelfObj).length

        console.log(`${id} ${genre}: ${count}`);
        let booksByTitle = Array.from(shelves.get(shelfObj))
            .sort((a, b) => {
                return a.bookTitle.localeCompare(b.bookTitle)
            })
        for (const book of booksByTitle) {
            console.log(`--> ${book.bookTitle}: ${book.author}`);
        }

    }
}

solveBookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])