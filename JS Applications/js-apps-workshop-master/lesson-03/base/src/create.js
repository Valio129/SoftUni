document.querySelector('form').addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const { name, img, ingredients, steps } = Object.fromEntries(data.entries());
    if (name == '' || img == '' || ingredients == '' || steps == '') {
        alert('All fields must be fufilled');
    }
    // Task: validate input  data
    const ingredientsData = ingredients.split('\n');
    const stepsData = steps.split('\n');
    console.log(ingredientsData, stepsData);
    // Validate current session
    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        alert('Invalid sesion');
        window.location.href = 'index.html';
    }
    const url = 'http://localhost:3030/data/recipes';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'Application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ name, img, ingredients: ingredientsData, steps: stepsData })
    };

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        console.log(responseData);
        window.location.href = 'index.html';
    } catch (error) {
        alert(error);
    }

}