function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('#container #main div')[0]
    .getElementsByTagName('button')[0];
    const decodeBtn = document.querySelectorAll('#container #main div')[1]
    .getElementsByTagName('button')[0];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
    const reciever = document.querySelectorAll('#container #main div')[1]
    .querySelector('textarea');
    console.log(encodeBtn);
    function encode(event) {
        let inputEl = event.target.parentNode
        .getElementsByTagName('textarea')[0];
        inputValue = inputEl.value
        .split('').map(char => char = (char.charCodeAt(0) + 1));
        console.log(inputValue);
        const output = String.fromCharCode(...inputValue)
        console.log(output); 
        reciever.value = output;
        inputEl.value = '';

        
    }
    function decode(event) {
        let inputEl = event.target.parentNode
        .getElementsByTagName('textarea')[0];
        let inputValue = inputEl.value;
        console.log(inputValue);
        inputValue = inputValue.split('')
        .map(char => char = (inputValue.charCodeAt(inputValue.indexOf(char)) - 1));
        const output = String.fromCharCode(...inputValue);
        console.log(output);
        reciever.value = output;
    }
    
}