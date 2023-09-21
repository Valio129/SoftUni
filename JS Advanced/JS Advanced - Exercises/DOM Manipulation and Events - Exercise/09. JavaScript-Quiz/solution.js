function solve() {
  let i = 0;
  let score = 0;
  const sections = [...document.querySelectorAll('#quizzie section')];
  sections[i].addEventListener('click', change);
  const result = document.querySelector('#quizzie #results');
  const answers = [0, 1, 0];
  function change(e) {
    const btns = [...document.querySelectorAll(`#quizzie section:nth-of-type(${i + 1}) ul li div p.answer-text`)];
    console.log(btns);
    const el = e.target;
    if (el == btns[answers[i]]) {
      score++;
      console.log('true');
    } else {
      console.log('false');
    }
    sections[i].style.display = 'none';
    i++;
    if (sections[i] == undefined) {
      result.style.display = 'block';
      if (score == 3) {
        result.children[0].children[0].textContent = "You are recognized as top JavaScript fan!";
      } else {
        result.children[0].children[0].textContent = `You have ${score} right answers`;
      }

      return;
    }
    sections[i].style.display = 'block';
    sections[i].addEventListener('click', change);
  }
}
