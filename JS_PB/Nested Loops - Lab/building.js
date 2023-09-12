function building(params) {
    let floors = Number(params[0]);
    let rooms = Number(params[1]);

    for (let floorIterator = floors; floorIterator > 0; floorIterator--) {
        let currLine = "";
        for (let roomIterator = 0; roomIterator < rooms; roomIterator++) {
            if (floorIterator === floors) {
                currLine += `L${floorIterator}${roomIterator} `;
            } else if (floorIterator % 2 === 0) {
                currLine += `O${floorIterator}${roomIterator} `;
            } else if (floorIterator % 2 !== 0) {
                currLine += `A${floorIterator}${roomIterator} `;

            }
        }
        console.log(currLine);
    }
} building(["9", "5"]);
