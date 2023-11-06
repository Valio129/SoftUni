async function getInfo() {
    const url = 'http://localhost:3030/jsonstore/bus/businfo/';
    //get DOM refs + initial Data
    const inputId = document.getElementById('stopId');
    const busesUl = document.getElementById('buses');
    const resultField = document.getElementById('stopName');
    const busId = inputId.value;

    
    try {
        const response = await fetch(url + busId);
        const busStopData = await response.json();
        //clear fields
        busesUl.innerHTML = '';
        inputId.value = '';
        //continue the rendering
        resultField.textContent = busStopData.name;
        for (const [busId, time] of Object.entries(busStopData.buses)) {
            const busStopLi = document.createElement('li');
            busStopLi.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesUl.appendChild(busStopLi);
        }
    }
    catch {
        resultField.textContent = 'Error';
    } 

    function appendErrMsg(e) {

    }
}
