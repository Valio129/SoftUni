//initialization
// - find relevant section

import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff

// - detach section from DOM
const section = document.getElementById('form-sign-up');
section.remove();
export function showRegister() {
    showView(section)
}
// get input fields 
// make a request 
// get response data 
// update the DOM structure
// save user token and email 