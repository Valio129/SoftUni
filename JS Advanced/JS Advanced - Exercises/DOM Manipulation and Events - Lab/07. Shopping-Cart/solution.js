function solve() {
   let checkoutButtonEl = document.getElementsByClassName('checkout')[0];
   let textAreaEl = document.getElementsByTagName('textarea')[0];
   console.log(textAreaEl);
   let listItems = [];
   let totalCost = 0;
   let shoppingItems = Array.from(document.querySelectorAll('.shopping-cart div.product'));
   let addBtns = Array.from(document.querySelectorAll('div.product-add button'))
   console.log(addBtns);
   shoppingItems.forEach(itemEl => {
      const productTitle = itemEl.children[1].children[0].textContent;
      let addButton = itemEl.children[2].children[0];
      const productPrice = Number(itemEl.children[3].textContent);
      // console.log(productTitle);
      // console.log(productPrice);
      // console.log(addButton);
      addButton.addEventListener('click', (e => {
         totalCost += productPrice;
         if (!listItems.includes(productTitle)) {
            listItems.push(productTitle);
         }
         const outputText = `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
         textAreaEl.value += outputText;
      }))
   })
   checkoutButtonEl.addEventListener('click', e => {
      let outputText = `You bought ${listItems.join(', ')} for ${totalCost.toFixed(2)}.`;
      textAreaEl.value += outputText;
      checkoutButtonEl.disabled = true;
      addBtns.forEach(btn => btn.disabled = true) //btn => btn.disabled = true
   })
}
// disable add buttons after checkout is clicked
// total cost rounded