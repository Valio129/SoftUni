function validate() {
    const [username, email, pass, confirmPass, companyCheck, companyNum] =
        document.querySelectorAll('#registerForm input');
    const submitBtn = document.getElementById('submit');
    const validationDiv = document.getElementById('valid');
    const userPatt = /^[A-Za-z0-9]{3,20}$/;
    const passPatt = /^[\w]{5,15}$/;
    const emailPatt = /^[^@.]+@[^@]*\.[^@]*$/;  //  check again

    companyCheck.addEventListener('change', () => {
        const companyField = document.querySelector('fieldset#companyInfo');
        if (companyCheck.checked) {
            companyField.style.display = 'block';
        } else {
            companyField.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let validOut = [];

        if (userPatt.test(username.value)) {
            username.style.borderColor = '';
            validOut.push(true);
        } else {
            username.style.borderColor = 'red';
            validOut.push(false);
        }
        if (emailPatt.test(email.value)) {
            email.style.borderColor = '';
            validOut.push(true);
        } else {
            email.style.borderColor = 'red';
            validOut.push(false);
        }
        if (passPatt.test(pass.value)) {
            pass.style.borderColor = '';
            validOut.push(true);
        } else {
            pass.style.borderColor = 'red';
            validOut.push(false);
        }
        if ((confirmPass.value === pass.value) && confirmPass.value.length >= 5
            && confirmPass.value.length <= 15
            && passPatt.test(confirmPass.value)
        ) {
            confirmPass.style.border = '';
            validOut.push(true);
        } else {
            confirmPass.style.borderColor = 'red';
            validOut.push(false);
        }
        if (companyCheck.checked) {
            if ((Number(companyNum.value) >= 1000 && Number(companyNum.value) <= 9999)) {
                companyNum.style.borderColor = '';
                validOut.push(true);
            } else {
                companyNum.style.borderColor = 'red';
                validOut.push(false);
            }
        }
        if (!validOut.includes(false)) {
            validationDiv.style.display = 'block';
        } else {
            validationDiv.style.display = 'none';
        }

    });
}
