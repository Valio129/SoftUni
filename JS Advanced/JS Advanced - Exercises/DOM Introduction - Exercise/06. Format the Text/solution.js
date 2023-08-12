function solve() {
  let inputText = document.getElementById('input').value;
  let sentancesArr = inputText.split('.');
  sentancesArr.pop();
  console.log(sentancesArr);
  let outputArr = [];
  let currParr = [];
  for (let i = 0; i < sentancesArr.length; i++) {
    const currSentance = sentancesArr[i];
    console.log(i);
    currSentance.endsWith('.') ? currParr.push(currSentance) : currParr.push(`${currSentance}.`);
    if ((i + 1) % 3 === 0 || i === sentancesArr.length - 1) {


      console.log(`currParr.join('. ')`);
      outputArr.push(`<p> ${currParr.join(' ')} </p>`);
      currParr = [];
      continue;
    }

  }
  let resultEl = document.getElementById('output');
  resultEl.innerHTML = `${outputArr.join(' ')}`;
}