function solve(input) {
    let usersList = []
    let articlesList = []
    /**
     * articles = {
        * article: user map( title, comment)
     * }
     *  
     * types of input:
     * if .split()
     * // add to list
     * [0] == user | article
     * // [1] posts
     */
    let obj = new Map()
    for (let token of input) {
        token = token.split(' ')
        if (token[1] === 'posts') {
            const username = token[0]
            const articleName = token[3].substring(0, token[3].length - 2)
            if (usersList.includes(username) && articlesList.includes(articleName)) {
                const title = token[4]
                const comment = token[5]
                obj.set(username, new Map)
                obj[username].set(title, comment)
            }
        } else {
            const action = token[0]
            const value = token[1]
            if (action === 'user') {
                usersList.push(value)
            } else {
                articlesList.push(value)
            }
        }
    }

console.log();
}
solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])