//*x  initialization
const tbody = document.querySelector('tbody');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');
loadBooks();

document.getElementById("loadBooks").addEventListener('click', loadBooks);
createForm.addEventListener('submit', onCreate);
editForm.addEventListener('submit', onEditSubmit);
tbody.addEventListener('click', onTableClick);

async function onEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const id = formData.get('id');

    const result = await updateBook(id, { author, title });
    tbody.appendChild(createRow(result._id, result));
    event.target.reset(); // clears fomr's input fields
    createForm.style.display = '';
    editForm.style.display = 'none';

    loadBooks();
}

function onTableClick(event) {
    if (event.target.className == 'delete') {
        onDelete(event.target);
    } else if (event.target.className == 'edit') {
        onEdit(event.target);
    }
}

async function onEdit(button) {
    const id = button.parentElement.dataset.id;
    const book = await loadBookById(id);

    createForm.style.display = 'none';
    editForm.style.display = '';

    editForm.querySelector('[name="author"]').value = book.author;
    editForm.querySelector('[name="id"]').value = id;
    editForm.querySelector('[name="title"]').value = book.title;
}
async function loadBookById(id) {
    const book = request('http://localhost:3030/jsonstore/collections/books/' + id);
    return book;
}


async function onDelete(button) {
    const id = button.parentElement.dataset.id;
    console.log(id);
    await deleteBook(id);
    button.parentElement.parentElement.remove();
}
async function deleteBook(id) {
    console.log(id);
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        "method": 'DELETE'
    });
    return result;
}

async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const result = await createBook({ author, title });
    tbody.appendChild(createRow(result._id, result));
    event.target.reset(); // clears fomr's input fields
}


async function request(url, options) {

    if (options && options.body !== undefined) {
        Object.assign(options, {
            'headers': {
                'Content-Type': 'aplication/json'
            }
        });
    }

    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = response.json();
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}


async function loadBooks() {
    const booksData = await request('http://localhost:3030/jsonstore/collections/books');
    const result = Object.entries(booksData).map(([id, book]) => createRow(id, book));
    tbody.replaceChildren(...result);
    return booksData;
}
function createRow(id, book) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${id}>
        <button class ="edit">Edit</button>
        <button class ="delete" >Delete</button>
    </td>`;
    return tr;
}


async function createBook(book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books', {
        "method": 'POST',
        "body": JSON.stringify(book)
    });
    return result;
}


async function updateBook(id, book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        "method": 'PUT',
        "body": JSON.stringify(book)
    });
    return result;
}







/**
x load all books 
x create book
x update book
x deletebook
x handle edit form
x handle create form
x handle delete btn
*/
