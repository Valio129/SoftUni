//initialization
// - find relevant section
const userData = JSON.parse(sessionStorage.getItem('userData'));
import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff
import { showHome } from "./home.js";

// - detach section from DOM
const section = document.getElementById('add-movie');
section.remove();
export function showCreate() {
    showView(section);
}
const createForm = section.querySelector('#add-movie-form');
console.log(createForm);
createForm.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
    if (userData !== null) {
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('img');
        if ([...formData.values()].some(e => e == '') == false) {
            const res = await fetch('http://localhost:3030/data/movies/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': userData.token
                },
                body: JSON.stringify({ title, description, img })
            });
            showHome();
        } else {
            alert('Empty line');
        }
    }
}