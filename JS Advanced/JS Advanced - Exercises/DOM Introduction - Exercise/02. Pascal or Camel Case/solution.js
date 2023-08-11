function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  // console.log(convention);
  text = text.split(' ');
  let result;
  switch (convention) {
    case 'Camel Case':
      const firstWord = text.shift().toLowerCase();
      text = Array.from(text.map((word, index) => {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let restWord = word.slice(1).toLowerCase();
        word = firstLetter.concat(restWord);
        // console.log(word);
        return word;
      }));
      text.unshift(firstWord);
      result = text.join('');
      break;
    case 'Pascal Case':
      text = Array.from(text.map((word, index) => {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let restWord = word.slice(1).toLowerCase();
        word = firstLetter.concat(restWord);
        // console.log(word);
        return word;
      }));
      result = text.join('');
      break;
    default:
      result = 'Error!'
      break;
  }
  // console.log(text.join(''));
  document.getElementById('result').textContent = result;
}