function passValidator(pass) {
    let password = pass.split("")
    let isValid = true
    let printed = false
    digitCounter = 0
    if (password.length < 6 || password.length > 10) {
        isValid = false
        console.log('Password must be between 6 and 10 characters ');
    }
    for (let index = 0; index < password.length; index++) {
        let charCode = pass.charCodeAt(index)
        if (charCode >= 48 && charCode <= 57) {
            digitCounter++
            continue;
        }
        else if ((charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)) {
            continue;
        } else {
            isValid = false
            if (printed === false) {
                console.log('Password must consist only of letters and digits ');
                printed = true
            }
        }
    }
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false
    }

    if (isValid) {
        console.log('Password is valid')
    }
}
passValidator('MyPass123')
// passValidator('Pa$s$s')