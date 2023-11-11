document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const { email, password } = Object.fromEntries(data.entries());
    console.log(email, password);
    const url = 'http://localhost:3030/users/login';
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ email, password })
    };

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log(responseData);
        sessionStorage.setItem('authToken', responseData.accessToken);
        window.location.href = 'index.html';
    } catch (error) {
        alert(error);
    }

}