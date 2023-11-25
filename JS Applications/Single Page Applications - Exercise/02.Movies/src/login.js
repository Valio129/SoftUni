

import { updateNav } from "./app.js";
import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff
import { showHome } from "./home.js";
//initialization
// - find relevant section
// - detach section from DOM

const form = document.getElementById('form-login').addEventListener('submit', onLogin);
const section = document.getElementById('form-login');
section.remove();

export function showLogin() {
    showView(section)
}
async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password);
    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({email, password})
        })
        if (res.ok == false) {
            const err = await res.json()
            throw new Error(err.message)
        }
        const data = await res.json();
        sessionStorage.setItem('userData', JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken
        }))
        event.target.reset()
        updateNav()
        showHome()
    } catch (error) {
        alert(error.message)
    }
}