function addItem() {
  let textAreaInput = document.getElementById('newItemText').value;
  let newItemEl = document.createElement('li');
  let itemsEl = document.getElementById('items'); 
  newItemEl.textContent = textAreaInput;
//   console.log(newItemEl); 
  itemsEl.appendChild(newItemEl);

}