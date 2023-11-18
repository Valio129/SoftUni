// import { request } from "./register";
console.log('here');
window.addEventListener('load', checkUserInfo);
document.getElementById('logout').addEventListener('click', logoutUser);
if (sessionStorage.getItem('token')) {
    document.getElementById('guest').style.display = 'none';
    document.getElementById('user').style.display = '';
} else {
    document.getElementById('guest').style.display = '';
    document.getElementById('user').style.display = 'none';
}
async function logoutUser(event) {
    const result = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': sessionStorage.getItem('token')
        }
    });
    sessionStorage.clear();
    window.location.href = 'index.html'
    
}
function checkUserInfo(event) {
    if (sessionStorage.getItem('token') !== null) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = '';
    } else {
        document.getElementById('guest').style.display = '';
        document.getElementById('user').style.display = 'none';
    }
    console.log('Checket client data');
}
async function fetch(url, options) {

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