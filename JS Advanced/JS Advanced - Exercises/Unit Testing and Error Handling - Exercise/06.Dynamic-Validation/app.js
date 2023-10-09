function validate() {
    const inputField = document.querySelector('input#email');
    const validEmailPatt = /^[a-z]+@[a-z]+\.[a-z]+$/gm;
    inputField.addEventListener('change', () => {
        if (validEmailPatt.test(inputField.value)) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error');
        }
    });
}