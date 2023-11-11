function attachEvents() {
    const button = document.getElementById('btnLoadPosts');
    const select = document.getElementById('posts');
    const vewBtn = document.getElementById('btnViewPost');
    const postBody = document.getElementById('post-body');
    const postTitle = document.getElementById('post-title');
    const postComments= document.getElementById("post-comments");
    console.log(postComments);
    button.addEventListener('click', loadPosts)
    vewBtn.addEventListener('click', loadPostAndComments)


    function loadPostAndComments() {
        const selectedPost = select.querySelector('option:checked')
        //fetch for the post body
        console.log( selectedPost.value);

        fetch('http://localhost:3030/jsonstore/blog/posts/'+ selectedPost.value).then(response=> response.json())
        .then(data => {
            postBody.innerHTML = ''
            postBody.textContent = data.body
            postTitle.textContent = data.title
        })
        fetch('http://localhost:3030/jsonstore/blog/comments/').then(response=> response.json())
        .then(data => {
            console.log(data);
            const filteredData = Object.values(data).filter(comment => comment.postId == selectedPost.value)
            postComments.innerHTML=''
            for (const comment of filteredData) {
                postComments.appendChild(e('li',{id:comment.id}, comment.text))     
            }
            
        })
    }
    function loadPosts(event) {
        select.innerHTML = ''
        fetch('http://localhost:3030/jsonstore/blog/posts').then(response=> response.json())
        .then(data => {
            for (const key in data) {
                const dataObj = data[key]
                console.log(dataObj.title);
                select.appendChild(e('option',{value: dataObj.id}, dataObj.title))
            }
        })

    }
    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}

attachEvents();