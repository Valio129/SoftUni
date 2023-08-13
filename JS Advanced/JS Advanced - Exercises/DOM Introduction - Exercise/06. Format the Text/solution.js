function solve() {
  let inputText = document.getElementById('input').value;
  let sentancesArr = inputText.split('.');
  // sentancesArr.pop();
  sentancesArr = sentancesArr.filter(x => x !== '\n').filter(x => x !== '');
  console.log(sentancesArr);
  let outputArr = [];
  let currParr = [];
  let sentanceNum = 1;
  for (let i = 0; i < sentancesArr.length; i++) {
    let currSentance = sentancesArr[i];
    console.log(currSentance + `, index: ${i}`);
    if ((currSentance.length == 1)) {
      if (sentancesArr[i + 1] !== undefined) {
        currSentance = currSentance.concat(`.${sentancesArr[i + 1]}`);
      } 
      i++;
      // sentanceNum;
      // console.log(currSentance + '     new sentance');
      // console.log(i);

    }
    if (currSentance.endsWith('.') == false) {
      currSentance += '.';
      // console.log(currSentance);
    }
    currParr.push(currSentance);
    if (sentanceNum % 3 === 0 || (sentancesArr[i + 1] == undefined)) {
      console.log('end parr');
      outputArr.push(`<p> ${currParr.join(' ')} </p>`);
      currParr = [];
    }
    sentanceNum++;

  }
  let resultEl = document.getElementById('output');
  resultEl.innerHTML = `${outputArr.join(' ')}`;
}