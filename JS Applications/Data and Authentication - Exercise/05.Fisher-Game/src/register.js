window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('token')) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = '';
    } else {
        document.getElementById('guest').style.display = '';
        document.getElementById('user').style.display = 'none';
    }
    const form = document.querySelector('form');
   
    form.addEventListener('submit', onSubmit);
});
console.log('Heeeey');
async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');
    if (email !== '' && password !== '' && rePass !== '') {
        if (rePass === password) {
            await createUser({ email, password });
        } else {
            alert('Pass and repass are not the same');
        }
    } else {
        alert('All fields must be filled');
    }
}
async function createUser(user) {
    console.log(user);
    try {
        const result = await request('http://localhost:3030/users/register', {
            'method': 'post',
            'headers': {
                'Content-Type': 'aplication/json'
            },
            'body': JSON.stringify(user)
        });
        const token = result.accessToken;
        sessionStorage.setItem('id', result._id);
        sessionStorage.setItem('email', result.email);
        sessionStorage.setItem('token', token); 
        window.location.href = 'index.html'
    } catch (error) {
        alert(error);
    }
}
async function request(url, options) {

    if (options && options.body !== undefined) {
        Object.assign(options, {
            'headers': {
                'Content-Type': 'aplication/json'
            }
        });
    }

    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = response.json();
        throw new Error();
    }
    const data = await response.json();
    return data;
}