// import { request } from "./register";
console.log('here');
window.addEventListener('DOMContentLoaded', () => {
    loadCatches();
    if (sessionStorage.getItem('token')) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = '';
        document.querySelector('#addForm button.add').disabled = false;
        document.querySelector('nav p.email span'). textContent = sessionStorage.getItem('email')
    } else {
        document.getElementById('guest').style.display = '';
        document.getElementById('user').style.display = 'none';
    }
    document.getElementById('logout').addEventListener('click', logoutUser);
    document.getElementById('addForm').addEventListener('submit', createNewCatch);
    document.querySelector("button.load").addEventListener('click', loadCatches);
    document.getElementById('catches').addEventListener('click', onCatchClick);
});

async function onCatchClick(event) {
    const el = event.target;
    if (el.tagName === 'BUTTON') {
        console.log('button clicked');
        if (el.className === 'update') {
            updateCatch(el);
        } else if (el.className === 'delete') {
            deleteCatch(el);
        }
    }
}
async function deleteCatch(button) {
    const response = await fetch('http://localhost:3030/data/catches/'+ button.dataset.id, {
        'method': 'DELETE',
        'headers': {
            'X-Authorization': sessionStorage.getItem('token')
        },
    });
    loadCatches();
}
async function updateCatch(button) {
    console.log(button);
    const form = button.parentNode.querySelectorAll('input');
    const data = {};
    form.forEach(f => {
        data[f.className] = f.value;
    });
    const response = await fetch('http://localhost:3030/data/catches/'+ button.dataset.id, {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'aplication/json',
            'X-Authorization': sessionStorage.getItem('token')
        },
        'body': JSON.stringify(data)
    });
    if (response.ok == true) {
        console.log('success');
    } else {
        console.log('error');
    }
    loadCatches();

}
async function createNewCatch(event) {
    event.preventDefault();
    console.log('prevented');
    const formData = new FormData(event.target);
    const userCatchData = {
        "angler": formData.get('angler'),
        "weight": formData.get('weight'),
        "species": formData.get('species'),
        "location": formData.get('location'),
        "bait": formData.get('bait'),
        "captureTime": formData.get('captureTime')
    };
    const response = await fetch('http://localhost:3030/data/catches', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'aplication/json',
            'X-Authorization': sessionStorage.getItem('token')
        },
        'body': JSON.stringify(userCatchData)
    });
    if (response.ok == true) {
        console.log('success');
    } else {
        console.log('error');
    }
    loadCatches();
}

async function loadCatches(event) {
    const response = await fetch('http://localhost:3030/data/catches');
    const catches = await response.json();
    // catches.map(generateCatchInfo);
    console.log(catches);
    document.getElementById('catches').replaceChildren(...catches.map(generateCatchInfo));
}
function generateCatchInfo(catchObj) {
    const div = document.createElement('div');
    div.className = 'catch';
    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${catchObj.angler}" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>
    <label>Weight</label>
    <input type="text" class="weight" value="${catchObj.weight}" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>
    <label>Species</label>
    <input type="text" class="species" value="${catchObj.species} Blue Marlin" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>
    <label>Location</label>
    <input type="text" class="location" value="${catchObj.location}, Brazil" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>
    <label>Bait</label>
    <input type="text" class="bait" value="${catchObj.bait}" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${catchObj.captureTime}" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>
    <button class="update" data-id="${catchObj._id}" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>Update</button>
    <button class="delete" data-id="${catchObj._id}" ${catchObj._ownerId !== sessionStorage.getItem('id') ? 'disabled' : ''}>Delete</button>`;
    // console.log(div);\
    return div;
}
async function logoutUser(event) {
    const result = await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': sessionStorage.getItem('token')
        }
    });
    sessionStorage.clear();
    window.location.href = 'index.html';

}

