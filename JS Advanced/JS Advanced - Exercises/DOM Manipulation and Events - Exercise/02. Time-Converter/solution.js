function attachEventsListeners() {
    const main = document.querySelector('main');
    main.addEventListener('click', generateOut);

    const units = {
        'days': 1,
        'hours': 24,
        'minutes': 1440,
        'seconds': 86400
    };

    function generateOut(e) {
        const el = e.target;
        if (el.tagName =='INPUT' && el.type == 'button') {
            const unit = el.parentElement.querySelector('input[type="text"]').id;
            const value = Number(el.parentElement.querySelector('input[type="text"]').value);
            const convertedObj = convertDataToDays(value, unit);
            for (const key in convertedObj) {
                const row = main.querySelector(`div input#${key}`);
                row.value = convertedObj[key];
            }
        }
    }

    function convertDataToDays(inputValue, inputUnit) {
        inputValue /= units[inputUnit];
        let outputObj = {};
        for (const unitKey in units) {
            outputObj[unitKey] = inputValue * units[unitKey];
        }
        return outputObj;
    }
}