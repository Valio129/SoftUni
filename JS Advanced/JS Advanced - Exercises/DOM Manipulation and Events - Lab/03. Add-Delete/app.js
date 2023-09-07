function addItem() {
  let textAreaInput = document.getElementById('newItemText').value;
  let newItemEl = document.createElement('li');
  let itemsEl = document.getElementById('items');
  newItemEl.textContent = textAreaInput;
  let deleteLink = document.createElement('a');
  deleteLink.textContent = '[Delete]';
  deleteLink.setAttribute('href', '#');
  newItemEl.appendChild(deleteLink);
  let deleteRow = function (event) {
    let row = event.currentTarget.parentNode;
    row.parentNode.removeChild(row);
  };
  deleteLink.addEventListener('click', deleteRow);
  itemsEl.appendChild(newItemEl);

}