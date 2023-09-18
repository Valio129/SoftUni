// tbody tr td,td,td
// get data from textarea and JSON parce it 
// for each obj -> generate one row 
// each key -> generate: td: picture append it  td: name append it and so on
// append the row to the table
function solve() {

  const main = (document.querySelector('#container div#exercise'));
  const generateBtn = main.querySelector('h1').nextElementSibling.nextElementSibling;
  const itemList = main.querySelector('div.wrapper div.card-wrapper table tbody');
  console.log(itemList);
  generateBtn.addEventListener('click', generateItems);
  function generateItems(e) {
    const textAreaData = e.target.parentNode.querySelector('textarea').value;
    const inputItemsArray = Array.from(JSON.parse(textAreaData));
    // console.log(inputItems);
    for (const itemObj of inputItemsArray) {
      const tbRow = document.createElement('tr');
      for (const key in itemObj) {
        const element = itemObj[key];
        const td = document.createElement('td');
        if (key =='img') {
          td.appendChild(document.createElement('img').setAttribute('href',`${element}`))
        } else if(key == 'price' || key == 'decFactor') {
          const data = document.createElement('p')
          data.textContent = Number(element);
          td.appendChild(data);
        } else {
          const data = document.createElement('p')
          td.appendChild(data);
        }
        tbRow.appendChild(td);
      }
      itemList.appendChild(tbRow)

    }

  }
  //TODO...
}