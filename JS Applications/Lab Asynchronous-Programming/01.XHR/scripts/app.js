function loadRepos() {
   const res = document.getElementById('res');
   const request = new XMLHttpRequest();
   request.addEventListener('readystatechange', checkState);
   function checkState() {
      if (request.readyState == 4 && request.status == 200) {
         res.textContent = request.responseText;
      }
   }
   request.open("GET", 'https://api.github.com/users/testnakov/repos');
   request.send();
}