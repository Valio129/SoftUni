//initialization
// - find relevant section

import { showView } from "./dom.js"; // zaduljetlno trqbva da ima .js ako e front-end stuff

// - detach section from DOM
const section = document.getElementById('home-page');
section.remove();
export function showHome() {
    showView(section)
}