import { showView } from "./dom.js";
// import { showCreate } from "./create.js";
// import { showEdit } from "./edit.js";
// import { showCreate } from "./create.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
// import { showMovieDetails } from "./details.js";
/** 
 * 
* Functionality to implement:
* 
* create placeholder modules for every view 
* configure and test navigation
* implement modules
*  - create async functions for request
*  
*/
//- implement DOM logic
const nav = document.querySelector('nav');
const views = {
    "homeLink": showHome,
    "loginLink": showLogin,
    "registerLink": showRegister,
};

nav.addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
        const view = views[event.target.id];
        if (typeof view == 'function') {
            view();
        }
    }
});
document.getElementById('logoutBtn').addEventListener('click', onLogout);

export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
        updateUserMessage();
        [...nav.querySelectorAll('li.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelectorAll('li.guest')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('li.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('li.guest')].forEach(e => e.style.display = 'block');
    }

    function updateUserMessage() {
        const userEmail = userData.email;
        nav.querySelector('#welcomeMsg').textContent = `Welcome, ${userEmail}`;
    }
}
async function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const {token} = JSON.parse(sessionStorage.getItem('userData'))
    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization' : token
        }
    })
    sessionStorage.removeItem('userData');
    updateNav();
    showLogin();
}
/*
 * Order of views: Easy -> Hard
 * X catalog(home view)
 * X Welcome message
 * X login
 * X register
 * X logout
 * X create
 * X details
 * X likes
 * X edit
 * X delete
 * -
 */

// showLogin();
// showCreate();
// showEdit();
// showMovieDetails();
// showRegister();
// Start application in home view/ catalog
updateNav();
showHome();
window.updateNav = updateNav;