function solve(inputs) {
    let users = [];
    let articles = [];
    let commentsByArticle = {};
    for (let input of inputs) {
        if (input.startsWith('user ')) {
            let user = input.split(' ')[1];
            users.push(user);
        } else if (input.startsWith('article ')) {
            let article = input.split(' ')[1];
            articles.push(article);
        } else if (/^(.+) posts on (.+): (.+), (.+)$/.test(input)) {
            let [match, user, article, title, content] = input.match(/^(.+) posts on (.+): (.+), (.+)$/);
            if (users.includes(user) && articles.includes(article)) {
                if (!commentsByArticle.hasOwnProperty(article)) {
                    commentsByArticle[article] = [];
                }
                commentsByArticle[article].push({user, title, content});
            }
        }
    }
    let sortedCommentsKeys = Object.keys(commentsByArticle).sort((a, b) => commentsByArticle[b].length - commentsByArticle[a].length);
    for (const article of sortedCommentsKeys) {
        console.log(`Comments on ${article}`);
        let comments = commentsByArticle[article];
        comments.sort((a, b) => a.user.localeCompare(b.user));
        for (let comment of comments) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
        }
    }
}