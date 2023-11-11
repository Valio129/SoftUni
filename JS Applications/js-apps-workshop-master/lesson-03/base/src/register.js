const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', async event => {
    event.preventDefault();
    //Task 1: Get data
    const data = new FormData(form);
    const entries = [...data.entries()];
    // const userData = {
    //     email: data.get('email'),
    //     password: data.get('password'),
    //     repeat: data.get('rePass'),     // used for err handling
    // };
    // console.log(userData);
    const { email, password, rePass } = Object.fromEntries(entries);
    console.log(email, password, rePass);
    //Task 2: Validate the input fields
    if (email == '' || password == '' || rePass == '') {
        return alert('All fields must be fufilled');
    }
    if (password !== rePass) {
        alert('Passwords must be the same');
    }
    const url = 'http://localhost:3030/users/register';
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })

    };
    // Task 3: Request register for the user 
    try {
        const response = await fetch(url, options);
        const returnedData = await response.json();
        const authToken = returnedData.accessToken;
        // Task 4: Get auth token
        sessionStorage.setItem('authToken', authToken);
        //After successfull registration: redirect to Catalog page
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
        // alert(error.message)
    }
})


