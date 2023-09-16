function addItem() {
    let [inputText, inputValue] = Array.from(document.querySelectorAll('input'));
    const newEl = document.createElement('option');
    newEl.textContent = inputText.value;
    newEl.value = inputValue.value;
    const menu = document.querySelector('div select[id="menu"]');
    menu.appendChild(newEl);
    console.log(inputText);
    inputText.value = '';
    inputValue.value = '';

}