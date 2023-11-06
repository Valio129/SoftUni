async function getInfo() {
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';
    const inputId = document.getElementById('stopId').value;
    const busesUl = document.getElementById('buses');
    const resultField = document.getElementById('stopName');
    const response = await fetch(url + inputId);
    busesUl.innerHTML = ''
    if (response.status !== 200) {
        resultField.textContent = 'Error';
    } else {
        //continue the rendering
        const busStopData = await response.json();
        resultField.textContent = busStopData.name;
        for (const [busId, time] of Object.keys(busStopData.buses)) {
            const busStopLi = document.createElement('li');
            busStopLi.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesUl.appendChild(busStopLi);
        }

    }
}
