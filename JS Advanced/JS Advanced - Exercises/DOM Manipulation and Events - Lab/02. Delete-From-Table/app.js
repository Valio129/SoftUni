function deleteByEmail() {
    let tableRowEls = Array.from(document.querySelectorAll('#customers tbody tr td:nth-child(2)'));
    let inputText = document.getElementsByName('email')[0].value;
    let result = document.getElementById('result');
    tableRowEls.forEach(r => {
        if (r.textContent === inputText) {
            let row = r.parentNode;
            row.parentNode.removeChild(row);
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    })
    
}