//initialization
// - find relevant section

import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff
import { e } from "./dom.js";
import { showEdit } from "./edit.js";
import { showHome } from "./home.js";
// - detach section from DOM
const section = document.getElementById('movie-example');
section.remove();
export function showMovieDetails(movieId) {
    showView(section);
    getMovie(movieId);
}
async function getMovie(id) {
    const requests = [
        fetch('http://localhost:3030/data/movies/' + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
    ];

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData !== null) {
        requests.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }

    const [movieRes, likesRes, hasLikedRes] = await Promise.all(requests);
    const [movieData, likes, hasLiked] = await Promise.all([
        movieRes.json(),
        likesRes.json(),
        hasLikedRes && hasLikedRes.json()
    ]);
    section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

// window.getMovie = getMovie;
function createDetails(movie, likes, hasLiked) {
    const controls = e('div', { className: 'col-md-4' },
        e('h3', { className: 'my-3' }, 'Movie Description'),
        e('p', {}, `${movie.description}`)
    );

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(sessionStorage.getItem('userData'));
    if (userData !== null) {
        if (userData.id == movie._ownerId) {
            controls.appendChild(e('a', { className: 'btn btn-danger', href: '#', onClick: onDelete }, 'Delete'));
            controls.appendChild(e('a', { className: 'btn btn-warning', href: '#', onClick: onEdit }, 'Edit'));
        } else {
            if (hasLiked.length > 0) {
                controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: onUnlike }, 'Unlike'));
            } else {
                controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: onLike }, 'Like'));
            }
        }
        controls.appendChild(e('span', { className: 'enrolled-span', href: '#' }, `Liked ${likes}`));

        function onEdit() {
            showEdit();
            const editForm = document.querySelector('#edit-movie form');
            console.log(editForm);
            editForm.querySelector('input[name="title"]',).value = movie.title;
            editForm.querySelector('textarea[name="description"]',).value = movie.description;
            editForm.querySelector('input[name="img"]',).value = movie.img;
            // console.log([...formData.entries()]);
            editForm.addEventListener('submit', onEditSubmit);
            const id = movie._id;
            async function onEditSubmit(event) {
                event.preventDefault();
                const formData = new FormData(editForm);
                const title = formData.get('title');
                const description = formData.get('description');
                const img = formData.get('img');
                if ([...formData.values()].some(e => e == '') == false) {
                    const res = await fetch('http://localhost:3030/data/movies/' + id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Authorization': userData.token
                        },
                        body: JSON.stringify({ title, description, img })
                    });
                    showMovieDetails(movie._id);
                } else {
                    alert('Empty line');
                }
            }

        }

        async function onDelete() {

            try {
                const id = movie._id;
                const res = await fetch('http://localhost:3030/data/movies/' + id, {
                    method: 'DELETE',
                    headers: {
                        // 'Content-Type': 'applicatio/json',
                        'X-Authorization': userData.token
                    },
                    // body: JSON.stringify({_ownerId: userData._id})
                });
            } catch (error) {
                alert(error);
            }
            showHome();
        }

        async function onUnlike() {
            const likedId = hasLiked[0]._id;
            console.log('clicked uinlike');
            await fetch('http://localhost:3030/data/likes/' + likedId, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': userData.token
                },
                body: JSON.stringify({ _ownerId: userData._id })

            });

            showMovieDetails(movie._id);
        }

        async function onLike() {

            console.log('clicked');
            const res = await fetch('http://localhost:3030/data/likes', {
                method: 'post',
                headers: {
                    'Content-Type': 'applicatio/json',
                    'X-Authorization': userData.token
                },
                body: JSON.stringify({
                    movieId: movie._id
                })
            });
            showMovieDetails(movie._id);
        }
    }
    // e('p', {}, `${movie.description}`);
    const element = e('div', { className: 'container' },
        e('div', { className: 'row bg-light text-dark' },
            e('h1', {}, `Movie title: ${movie.title}`),
            e('div', { className: 'col-md-8' },
                e('img', { className: 'img-thumbnail', src: `${movie.img}`, alt: 'Movie' })
            ),
            controls
        )
    );
    return element;
}
/**
 *  <div class="container">
        <div class="row bg-light text-dark">
          <h1>Movie title: Black Widow</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
              alt="Movie" />
          </div>

          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
              Natasha Romanoff aka Black Widow confronts the darker parts of
              her ledger when a dangerous conspiracy with ties to her past
              arises. Comes on the screens 2020.
            </p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked 1</span>
          </div>

        </div>
      </div>
 */