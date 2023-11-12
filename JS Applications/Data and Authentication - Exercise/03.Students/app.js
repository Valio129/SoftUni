
const table = document.getElementById('results');
window.addEventListener('load', onLoad);
document.getElementById('form').addEventListener('submit', onSubmit);
async function onLoad() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const studentsData = await response.json();
    table.querySelector('tbody').replaceChildren(...Object.values(studentsData).map(createRow));
}
function createRow(student) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${student.firstName}</td>
    <td>${student.lastName}</td><td>${student.facultyNumber}</td><td>${student.grade}</td>`;
    return tr;
}
async function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target);
    console.log(data);
    const studentData = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        facultyNumber: data.get('facultyNumber'),
        grade: data.get('grade')
    };
    const response = await fetch('http://localhost:3030/jsonstore/collections/students',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
    }); 
    const result = await response.json()
    console.log(result);
    onLoad()
}