function solve() {
    const infoField = document.querySelector('#info span.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    // console.log(departBtn, arriveBtn, infoField);
    let stopObj = { 'next': 'depot' };
    async function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        const response = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + stopObj.next);
        if (response.status !== 200) {
            infoField.textContent = 'Error';
            arriveBtn.disabled = true;
        } else {
            stopObj = await response.json();
            infoField.textContent = `Next stop ${stopObj.name}`;
            // console.log(stopObj);
        }
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoField.textContent = `Arriving at ${stopObj.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();