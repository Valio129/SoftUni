function validate() {
    let inputEl = document.getElementById('email');
    inputEl.addEventListener('change', validate);
    function validate(e) {
        let el = e.currentTarget;
        let text = el.value;
        let reg = /[a-z]+@[a-z]+\.[a-z]+/gm;
        if (!(reg.test(text)) && (text != '')) {
            el.setAttribute('class', 'error');
            // console.log('matched');
        } else {
            el.removeAttribute('class');
        }

    }

}