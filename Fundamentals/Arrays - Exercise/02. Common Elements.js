function elements(arr1, arr2) {
    for (let firstCurrIndex = 0; firstCurrIndex < arr1.length; firstCurrIndex++) {
        for (let secondCurrIndex = 0; secondCurrIndex < arr2.length; secondCurrIndex++) {
            if (arr1[firstCurrIndex] === arr2[secondCurrIndex]) {
                console.log(arr1[firstCurrIndex]);
            }

        }

    }
}
elements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

    ['s', 'o', 'c', 'i', 'a', 'l']);

