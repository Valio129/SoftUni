class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex;
        this.inputEl = document.createElement('input');
        this.inputEl.setAttribute('type', 'textbox');
        this.inputEl.addEventListener('change', this.isValid);
        this._elements = document.querySelectorAll(selector);
        this._value = this.inputEl.value;                           // this.value ***
    }
    get value() {
        return this._value;
    }
    set value(r) {
        this._elements = Array.from(this._elements).map(el => el.value = r);
        this._value = r;
    }
    get elements() {
        return this._elements;
    }
    isValid = () => (this._invalidSymbols.match(this.value));

}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
console.log(textbox.elements);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
