function sumTable() {
    let result = 0;
    let numsArr = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let resEl = numsArr.pop();
     numsArr.forEach(x => {
        x = Number(x.textContent);
        result += x;
    });
    resEl.textContent = result;
}