//initialization
// - find relevant section

import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff

// - detach section from DOM
const section = document.getElementById('form-login');
section.remove();
export function showLogin() {
    showView(section)
}