function extractText() {
    let itemsEl = document.getElementById('items');
    let result = document.getElementById('result');
    result.value = itemsEl.textContent;
}