function attachEvents() {
    document.getElementById('btnCreate').addEventListener('click', onCreate);
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
    list.addEventListener('click', onDelete)
    // fetch('http://localhost:3030/jsonstore/phonebook').
}
const list = document.getElementById('phonebook');
attachEvents();

async function onCreate() {
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    // console.log(person, p);
    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ person: person.value, phone: phone.value })
    });
    person.value = ''
    phone.value = ''
    console.log(await response.json());
    onLoad()
}
async function onLoad() {
    list.innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await (response.json());
    console.log(data);
    Object.entries(data).map(([k, v]) => createContact(v, k)).forEach(c => list.appendChild(c));

}
function createContact(contact, id) {

    console.log(contact , id);
    const li = document.createElement('li');
    li.textContent = ``;
    li.innerHTML = `${contact.person}: ${contact.phone}<button data-id="${id}">Delete</button>`;
    li.id = 'phonebook';
    return li;
}
async function onDelete(event) {
    console.log(event.target);
    if (event.target.tagName == 'BUTTON') {
        // console.log('clicked button: http://localhost:3030/jsonstore/'+ event.target.dataset.id);
        const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + event.target.dataset.id, {
            method: 'DELETE',
        
        })
        const result = await response.json()
        console.log(result);
       await event.target.parentNode.remove();
    }
}
