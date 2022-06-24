function numPyr(params) {
    let n = Number(params[0]);
    let isReady = false;
    let currLineBuffer = "";
    let digitCounter = 1;


    for (let rows = 1; rows <= n; rows++) {

        for (let cols = 1; cols <= rows; cols++) {
            if (digitCounter > n) {
                isReady = true;
                break;
            }
            currLineBuffer += `${digitCounter} `;
            digitCounter++;

        }
        console.log(currLineBuffer);
        currLineBuffer = "";
        if (isReady) {
            return;

        }
    }
} numPyr(["15"]);