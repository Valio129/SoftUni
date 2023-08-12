function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputext = document.getElementById('searchField').value;
      console.log(inputext);
      let rowElsArr = Array.from(document.querySelectorAll('table tbody tr'));
      // console.log(rowElsArr);
      for (let row of rowElsArr) {
         if (row.textContent.includes(inputext)) {
            console.log('yes');
            row.classList = 'select';
         } else {
            row.classList = '';
         }
      }
      document.getElementById('searchField').value = '';
   }
}