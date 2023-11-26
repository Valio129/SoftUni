import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff
import { updateNav } from "./app.js";
import { showHome } from "./home.js";
const section = document.getElementById('form-sign-up');
section.remove();
export function showRegister() {
    showView(section)
}
//initialization
// - find relevant section
// - detach section from DOM

section.querySelector('#register-form').addEventListener('submit', onRegister);

async function onRegister(event) {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');
    if (email !== '' && password !== '' && repeatPassword !== '') {
        if (repeatPassword == password) {
            try {
                const res  = await fetch('http://localhost:3030/users/register', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email, password})
                });
                if (res.ok !== true) {
                    const error = await res.json();
                    throw new Error(error.message);
                } 
                const resData = await res.json();
                sessionStorage.setItem('userData', JSON.stringify({
                    email: resData.email,
                    id: resData._id,
                    token: resData.accessToken
                }))
                event.target.reset()
                updateNav()
                showHome()
            } catch (error) {
                alert(error.message);
            }

        } else {
            alert('Pass and repass don\'t match!')
        }
    } else {
        alert('No empty fields allowed!')
    }
}
// get input fields 
// make a request 
// get response data 
// update the DOM structure
// save user token and email 