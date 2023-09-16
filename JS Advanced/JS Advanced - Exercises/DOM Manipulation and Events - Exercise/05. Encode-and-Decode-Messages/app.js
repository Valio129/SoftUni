function encodeAndDecodeMessages() {
    //add ev listener to the encode button
    // encode => 
        // get value from textarea
        // encode it
        // get the reciever textarea and add the massage to it's value
    //add ev listener to the decode button
    // CLEAR TEXT
     // decode => 
        // get value from textarea
        // encode it
        // get the reciever textarea and add the massage to it's value
        // CLEAR TEXT
    const encodeBtn = document.querySelectorAll('#container #main div')[0]
    .getElementsByTagName('button')[0];
    const decodeBtn = document.querySelectorAll('#container #main div')[1]
    .getElementsByTagName('button')[0];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    console.log(encodeBtn);
    function encode(event) {
        let inputEl = event.target.parentNode
        .getElementsByTagName('textarea')[0];
        inputValue = inputEl.value.input.split('')
        .map(char => char = (input.charCodeAt(inputValue.indexOf(char)) + 1));
        const output = String.fromCharCode(...inputValue)
        // console.log(input);
        // console.log(output);
        const reciever = document.querySelectorAll('#container #main div')[1]
        .querySelector('textarea');
        reciever.value = output;
        inputEl.value = '';

        
    }
    function decode(event) {
        let inputEl = event.target.parentNode
        .getElementsByTagName('textarea')[0];
        let inputValue = event.target.parentNode
        .getElementsByTagName('textarea')[0].value;
        inputValue = inputValue.split('')
        .map(char => char = (inputValue.charCodeAt(inputValue.indexOf(char)) - 1));
        const output = String.fromCharCode(...inputValue)
        // console.log(input);
        // console.log(output);
        const reciever = document.querySelectorAll('#container #main div')[0]
        .querySelector('textarea');
        reciever.value = output;
        inputEl.value = '';
    }
    
}