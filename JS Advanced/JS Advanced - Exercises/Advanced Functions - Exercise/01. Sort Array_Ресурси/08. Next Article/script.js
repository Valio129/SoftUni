function getArticleGenerator(articles) {
    let index = 0;
    return function generate() {
        if (index < articles.length) {
            const el = document.createElement('article');
            el.textContent = articles[index];
            document.getElementById('content').appendChild(el);
        }
        index++;
    };
}
