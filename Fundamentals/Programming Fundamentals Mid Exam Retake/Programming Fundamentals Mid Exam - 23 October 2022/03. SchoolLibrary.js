function solve(input) {
    let array = input.slice(0)
    let shelf = array.shift().split('&')
    let token = array.shift()
    while (token !== 'Done') {
        token = token.split(' | ')
        let command = token.shift()
        let bookName = token.shift()
        switch (command) {
            case 'Add Book':
                if (!shelf.includes(bookName)) {
                    shelf.unshift(bookName)
                }
                break;
            case 'Take Book':
                if (shelf.includes(bookName)) {
                    shelf = shelf.filter(x => x !== bookName)
                }

                break;
            case 'Swap Books':
                let newBookName = token.shift()
                if (shelf.includes(bookName) && shelf.includes(newBookName)) {
                    let temp = bookName
                    let firstIndex = shelf.indexOf(bookName)
                    let secondIndex = shelf.indexOf(newBookName)
                    shelf[firstIndex] = newBookName
                    shelf[secondIndex] = temp

                }
                break;
            case 'Insert Book':
                if (!shelf.includes(bookName)) {
                    shelf.push(bookName)
                }
                break;
            case 'Check Book':
                let index = bookName
                if (index >= 0 && index < shelf.length) {
                    console.log(shelf[index]);
                }
                break;

            default:
                break;
        }


        token = array.shift()
    }
    console.log(shelf.join(', '));

}
solve(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])
console.log('-------------------------');
solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"])
console.log('-------------------------');
solve(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"])
