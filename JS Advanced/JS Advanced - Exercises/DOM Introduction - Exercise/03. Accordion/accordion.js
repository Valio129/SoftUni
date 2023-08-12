function toggle() {
    console.log('Less');
    let contentEl = document.getElementById('extra');
    let buttonEl = document.querySelector('span.button');
    if (buttonEl.textContent == 'More') {
        contentEl.style.display = 'block';
        buttonEl.textContent = 'Less';
    } else if (buttonEl.textContent == 'Less') {
        contentEl.style.display = 'none';
        buttonEl.textContent = 'More';
    }

}