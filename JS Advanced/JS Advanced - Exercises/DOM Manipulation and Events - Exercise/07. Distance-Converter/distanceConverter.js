function attachEventsListeners() {
    const [input, output] = document.querySelectorAll('input[type="text"]');
    const button = document.querySelector('input#convert');
    // console.log(button);
    // console.log(output);
    const converter = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    };
    button.addEventListener('click', convert);
    function convert(e) {
        const selectedInputUnit = document.getElementById('inputUnits').value;
        let value = Number(input.value);
        let valueToM = value * converter[selectedInputUnit];
        // console.log(valueToM);
        const selectedOutUnit = document.getElementById('outputUnits').value;
        const outValue = valueToM / converter[selectedOutUnit];
        output.value = outValue;
    }
}