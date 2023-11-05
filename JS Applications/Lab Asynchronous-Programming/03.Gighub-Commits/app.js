function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits')
    console.log('TODO...');
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    fetch(url).then(response => {
        if (response.ok == false) {
            return Promise.reject(response.status)
        } else {
           return response.json()
        }
    })
    .then(commitsArr => {
        ul.replaceChildren()
        commitsArr.map(commitObj => {
            const li = document.createElement('li')
            li.innerHTML = `<p>${commitObj.commit.author.name}: ${commitObj.commit.message}</p>`;
            ul.appendChild(li);
        })
    })
    .catch(errCode => ul.innerHTML = `<li><p>Error: ${errCode} (Not Found)</p></li>`);
}