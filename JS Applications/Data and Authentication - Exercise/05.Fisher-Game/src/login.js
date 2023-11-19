// import { request } from "./register";
window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('token')) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = '';
    } else {
        document.getElementById('guest').style.display = '';
        document.getElementById('user').style.display = 'none';
    }
    const login = document.querySelector('form');
    login.addEventListener('submit', onLogin);
});

async function onLogin(event) {
    event.preventDefault();
    console.log('prevented default');
    // console.log(event);
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    if (email !== '' && password !== '') {
        await loginUser({ email, password });
        // create token
    } else {
        alert('All fields must be filled');
    }
}
async function loginUser(user) {
    console.log(user);
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'aplication/json'
            },
            'body': JSON.stringify(user)
        });
        if (response.ok != true) {
            const error = response.json();
            throw new Error();
        }
        const result = await response.json()
        if (result.accessToken !== undefined) {
            const token = result.accessToken;
            sessionStorage.setItem('id', result._id);
            sessionStorage.setItem('email', result.email);
            sessionStorage.setItem('token', token);
            window.location.href = 'index.html';
        } else {
            throw new Error('Somthing wint wrong! Please, try again.');
        }
    } catch (error) {
        alert(error.message)
    }

    return result;
}
// async function request(url, options) {

//     if (options && options.body !== undefined) {
//         Object.assign(options, {
//             'headers': {
//                 'Content-Type': 'aplication/json'
//             }
//         });
//     }

//     const response = await fetch(url, options);
//     if (response.ok != true) {
//         const error = response.json();
//         throw new Error();
//     }
//     const data = await response.json();
//     return data;
// }