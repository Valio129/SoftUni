function condense(arr) {
    if (arr.length === 1) {
        console.log(arr[0]);
    } else {
        let condense = []

        for (let i = 0; i < arr.length - 1; i++) {
            condense.push(arr[i] + arr[i + 1])

        }

        while (condense.length > 1) {
            let tempArr = []
            for (let i = 0; i < condense.length - 1; i++) {
                tempArr.push(condense[i] + condense[i + 1])
            }
            condense = tempArr;
        }
        console.log(condense[0]);
    }
}


condense([1])