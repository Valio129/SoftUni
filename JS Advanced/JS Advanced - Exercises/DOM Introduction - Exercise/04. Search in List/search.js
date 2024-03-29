function search() {
   let listEl = document.getElementById('towns');
   let textBoxEl = document.getElementById('searchText');
   let searchTown = textBoxEl.value;
   let resultEl = document.getElementById('result');
   // let matchesCounter = Number(resultEl.textContent.split(' ')[0]);
   let matchesCounter = 0;
   if (listEl.textContent.includes(searchTown)) {
      let townsArr = Array.from(document.getElementsByTagName('li'));
      console.log(townsArr);
      for (let i = 0; i < townsArr.length; i++) {
         const currTown = townsArr[i].textContent;
         if (currTown.includes(searchTown)) {
            console.log(currTown);
            townsArr[i].style.fontWeight = 'bold';
            townsArr[i].style.textDecoration = 'underline';
            matchesCounter++;
         } else {
            townsArr[i].style.fontWeight = 'normal';
            townsArr[i].style.textDecoration = 'none';
         }
      }
   }
   // document.getElementById('searchText').reset(); 
   resultEl.textContent = `${matchesCounter} matches found`;
}

