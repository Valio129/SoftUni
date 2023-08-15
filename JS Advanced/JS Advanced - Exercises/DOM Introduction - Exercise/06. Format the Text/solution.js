function solve() {
  let inputTextEl = document.getElementById('input');
  let sentancesArr = inputTextEl.value.split('.').filter(s => s !== '');
  let resultEl = document.getElementById('output');

  while (sentancesArr.length > 0) {
    let sentance = sentancesArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = sentance;
    resultEl.appendChild(p);
  }
}