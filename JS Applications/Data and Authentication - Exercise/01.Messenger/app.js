function attachEvents() {
    const messages = document.getElementById('messages');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const url = 'http://localhost:3030/jsonstore/messenger';


    submitBtn.addEventListener('click', async () => {
        const author = document.querySelector('input[name="author"]');
        const content = document.querySelector('input[name="content"]');
        console.log(content.value, author.value);
        if (author.value !== '' && content.value !== '') {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ author: author.value, content: content.value })
                });
                console.log(await response.json());


            } catch (error) {
                console.log(error);
            }
        }
    });
    refreshBtn.addEventListener('click', async () => {
        const response = await fetch(url);
        const msgesData = await response.json();
        messages.textContent = '';
        Object.values(msgesData).forEach(m => messages.textContent += `${m.author}: ${m.content}\n`);
        messages.textContent = messages.textContent.trim()
    });
}

attachEvents();