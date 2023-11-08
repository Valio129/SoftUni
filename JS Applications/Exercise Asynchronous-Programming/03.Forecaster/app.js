function attachEvents() {
    const [inputField, submitBtn] = document.getElementById('request').children;
    const inputLocation = inputField.value;
    console.log(inputField, submitBtn, inputLocation);
    submitBtn.addEventListener('click', loadAllData);


    function loadAllData(ev) {
        const baseURl = 'http://localhost:3030/jsonstore/forecaster/locations';
        console.log('started, input is ' + inputField.value);
        const forecastDiv = document.querySelector('div#forecast');
        forecastDiv.style.display = '';
        if (inputField.value == '') {
            forecastDiv.textContent = 'Error';
            throw new Error('Error ocasdcureddd');
        }
        fetch(baseURl)
            .then(response => response.json())
            .then(data => {
                const locationObj = data.find(e => e.name == inputField.value);
                console.log(locationObj);
                if (locationObj == undefined) {
                    throw new Error();
                }


                loadToday(locationObj.code);
                loadForecast(locationObj.code);
            }).catch((e) => forecastDiv.textContent = 'Error');


        const iconObj = {
            'Sunny': '☀',
            'Partly sunny': '⛅',
            'Overcast': '☁',
            'Rain': '☂',
            'Degrees': '°',
        };
        function loadToday(searchCode) {
            //create URL
            const todayURL = 'http://localhost:3030/jsonstore/forecaster/today/' + searchCode;
            fetch(todayURL).then(response => response.json())
                .then(data => {
                    document.querySelector('div#forecast div#current').appendChild(
                        e('div', { className: 'forecasts' },
                            // span.condSymbol · Sunny &#x2600; // ☀   
                            e('span', { className: 'condition symbol' }, iconObj[data.forecast.condition]),
                            //span.condition
                            e('span', { className: 'condition' },
                                e('span', { className: 'forecast-data' }, data.name),
                                e('span', { className: 'forecast-data' }, `${data.forecast.low}${iconObj.Degrees}/${data.forecast.high}${iconObj.Degrees}`),
                                e('span', { className: 'forecast-data' }, data.forecast.condition)
                            ),

                        )
                    );
                });
        }


        function loadForecast(searchCode) {
            //create URL
            const forecastURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + searchCode;
            fetch(forecastURL).then(response => response.json())
                .then(data => {
                    // document.querySelector('div#forecast div#upcoming').innerHTML = '';
                    const weathers = [];
                    console.log(data.forecast);
                    data.forecast.forEach(day => {
                        weathers.push(
                            e('span', { className: 'upcoming' },
                                e('span', { className: 'symbol' }, iconObj[day.condition]),
                                e('span', { className: 'forecast-data' }, `${day.low}${iconObj.Degrees}/${day.high}${iconObj.Degrees}`),
                                e('span', { className: 'forecast-data' }, day.condition)
                            ));
                    });
                    document.querySelector('div#forecast div#upcoming').appendChild(e('div', { className: 'forecast-info' }, ...weathers));

                });
        };
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

/*
· Sunny &#x2600; // ☀

· Partly sunny &#x26C5; // ⛅

· Overcast &#x2601; // ☁

· Rain &#x2614; // ☂

· Degrees &#176; // °*/

