function create(words) {
   const outDiv = document.getElementById('content');
   for (const word of words) {
      const section = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      section.appendChild(para);
      outDiv.appendChild(section);
   }
   outDiv.addEventListener('click', reveal);
   function reveal(e) {
      const clickEl = e.target;
      if (clickEl.tagName == 'DIV') {
         clickEl.children[0].style.display = '';
      }
   }
}