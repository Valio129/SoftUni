function topInteger(arr) {
    let outputArr = []
    for (let currentElement = 0; currentElement < arr.length; currentElement++) {
        let currBiggest = arr[currentElement];
        let hasBigger = false;
        for (let arrIndex = currentElement; arrIndex < arr.length; arrIndex++) {
            if (currBiggest < arr[arrIndex]) {
                hasBigger = true;
                break;
            }


        }
        if (hasBigger == false) {
            if (outputArr.includes(currBiggest) == false) {
                outputArr.push(currBiggest)
            }
        }



    }

    console.log(outputArr.join(" "));

} topInteger([41, 41, 34, 20])
topInteger([14, 24, 3, 19, 15, 17])