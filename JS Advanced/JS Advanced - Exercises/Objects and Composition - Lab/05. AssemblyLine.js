function solve() {
    //beginning of my solution
    function createAssemblyLine() {
        let assemblyLib = {
            hasClima(carObj) {
                carObj.temp = 21;
                carObj.tempSettings = 21;
                carObj.adjustTemp = () => { // check if it's correct
                    if (carObj.temp < carObj.tempSettings) {
                        carObj.temp++;
                    } else if (carObj.temp > carObj.tempSettings) {
                        carObj.temp--;
                    }
                };
            },
            hasAudio(carObj) {
                carObj.currentTrack = { name: null, artist: null };
                carObj.nowPlaying = function () {
                    if (carObj.currentTrack.name && carObj.currentTrack.artist) {
                        console.log(`Now playing '${carObj.currentTrack.name}' by ${carObj.currentTrack.artist}`);
                    }
                };

            },
            hasParktronic(carObj) {
                carObj.checkDistance = function (distance) {
                    let output = '';
                    if (distance < 0.1) {
                        output = 'Beep! Beep! Beep!';
                    } else if (distance < 0.25) {
                        output = 'Beep! Beep!';
                    }
                    else if (distance < 0.5) {
                        output = 'Beep!';
                    }
                    console.log(output);
                };

            }


        };
        return assemblyLib;
    }
    // end
    // Setup
    const assemblyLine = createAssemblyLine();
    const myCar = {
        make: 'Toyota',
        model: 'Avensis'
    };
    //input data
    assemblyLine.hasClima(myCar);
    console.log(myCar.temp);
    myCar.tempSettings = 18;
    myCar.adjustTemp();
    console.log(myCar.temp);
    assemblyLine.hasAudio(myCar);
    myCar.currentTrack = {
        name: 'Never Gonna Give You Up',
        artist: 'Rick Astley'
    };
    myCar.nowPlaying();
    assemblyLine.hasParktronic(myCar);
    myCar.checkDistance(0.4);
    myCar.checkDistance(0.2);
    console.log(myCar);
}
solve();