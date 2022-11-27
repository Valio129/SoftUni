function solve(input) {
    let usersList = []
    let articlesList = []
    /**
     * article - {
     * 
     *      users - [title - comment]
     * }
     */
    let articles = new Map()
    for (let token of input) {
        if (token.split(' ').includes('posts')) {
            const splitSpace = token.split(' ')
            const username = splitSpace[0]
            const articleName = splitSpace[3]
                .substring(0, splitSpace[3].length - 1)
            // .substring(0, token[3].length - 1)
            if (usersList.includes(username) && articlesList.includes(articleName)) {
                let userContent = token.split(': ')[1]
                const title = userContent.split(', ')[0]
                const comment = userContent.split(', ')[1]
                if (!articles.has(articleName)) {
                    articles.set(articleName, new Map().set(username, [title, comment]))

                } else {

                    articles.get(articleName).set(username, [title, comment])
                }
            }
        } else {
            token = token.split(' ')
            const action = token[0]
            const value = token[1]
            if (action === 'user') {
                usersList.push(value)
            } else {
                articlesList.push(value)
            }
        }
    }

    //sort articles by size,
    // for each article print comments ordered by the users key (alphabetically)
    let sortedArticles = Array.from(articles.keys())
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => {
            let A = articles.get(a)
            let B = articles.get(b)
            return B.size - A.size
        })
    for (const articleName of sortedArticles) {
        console.log(`Comments on ${articleName}`);
        let articleKeys = Array.from(articles.get(articleName).keys())
            .sort((a, b) => b.localeCompare(a))

        for (const user of articleKeys) {
            const title = articles.get(articleName).get(user)[0]
            const content = articles.get(articleName).get(user)[1]
            console.log(`--- From user ${user}: ${title} - ${content}`);
        }
    }
}
solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])