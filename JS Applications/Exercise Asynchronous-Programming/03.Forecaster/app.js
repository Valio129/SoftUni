function attachEvents() {
    const [inputField, submitBtn] = document.getElementById('request').children;
    // console.log(inputField, submitBtn);
    const location = inputField.value;
    submitBtn.addEventListener('click', loadAllData(location));

    async function loadAllData(inputLocation) {
        const baseURl = 'http://localhost:3030/jsonstore/forecaster/locations';
        const response = await fetch(baseURl);
        const availableLocationsArr = await response.json();
        const locationObj = await availableLocationsArr.filter(e => e.name === inputLocation);

        if (locationObj) {
            const dataObj = await getLocationData(locationObj.code);
        }
        console.log(initialData);
        async function getLocationData(searchCode) {
            //create URLs
            const todayURL = 'http://localhost:3030/jsonstore/forecaster/today/' + searchCode;
            const forecastURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + searchCode;

            const today = await fetch(todayURL);
            const forecast = await fetch(forecastURL);
            return { today, forecast };
        }
    }




    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}

attachEvents();
/*
get data request 
filter searched location
create icons obj
if request is OK => fetch seconf url 
    print data for today and 3-day forecast

else / incorrect format => throw (catch) error

*/
