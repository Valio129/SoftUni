// import { request } from "./register";
// window.addEventListener('DOMContentLoaded', () => {
console.log('heere');
const login = document.querySelector('form');
login.addEventListener('submit', onLogin);


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
    const result = await request('http://localhost:3030/users/login', {
        'method': 'post',
        'headers': {
            'Content-Type': 'aplication/json'
        },
        'body': JSON.stringify(user)
    });
    if (result.accessToken) {
        const token = result.accessToken;
        sessionStorage.setItem('token', token);
        window.location.href = 'index.html'
    } else {
        alert('Somthing wint wrong! Please, try again.');
    }
    return result;
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