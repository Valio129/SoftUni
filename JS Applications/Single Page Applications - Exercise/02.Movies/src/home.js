//initialization
// - find relevant section
// - detach section from DOM
import { showView, e } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff
import { showCreate } from "./create.js";
import { showMovieDetails } from "./details.js";

const moviesCache = null;

const section = document.getElementById('home-page');
const catalog = section.querySelector('#movies-list')

document.getElementById('createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});

catalog.addEventListener('click', (event)=>{
    let target = event.target;
    if (target.tagName == 'BUTTON') {
        target = target.parentElement
    }
    if (target.tagName == 'A') {
        const id = target.dataset.id;
        console.log(id);
        showMovieDetails(id);
    }
})
section.remove();

export function showHome() {
    showView(section);
    getMovies();
}

async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();
    catalog.replaceChildren(...data.map(createMovieCard))

}

function createMovieCard(movie) {
    const element = e('div', { 'className': 'card mb-4' });
    element.innerHTML = `<img class="card-img-top"
    src="${movie.img}"
    alt="Card image cap" width="400">
<div class="card-body">
<h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
<a data-id="${movie._id}" href="#/details/CUtL9j4qI0XVhn9kTUsx">
    <button type="button" class="btn btn-info">Details</button>
</a>`;
    return element;
}
window.getMovies = getMovies;