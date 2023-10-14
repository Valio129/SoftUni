class Textbox {
    constructor(selector, regex) {
        this.selector = selector
        this._invalidSymbols = regex
        this.inputEl = document.createElement('input');
        this.inputEl.setAttribute('type','textbox')
        this.inputEl.addEventListener('change', this.isValid)
        this._elements = document.querySelectorAll(selector)
        this._value = this.inputEl.value
    }
    get value() {
        return this._value
    }
    set value(r) {
        this._value = r
    }
    get elements() {
         return this._elements
    }
    isValid() {
        if (this._invalidSymbols.match(this._value)) {
            return false
        } else {
            return true
        }
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
