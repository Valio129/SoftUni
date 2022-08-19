function equalSums(array) {
    for (let mainIndex = 0; mainIndex < array.length; mainIndex++) {
        let leftSum = 0;
        let rightSum = 0;
        // left loop         0    -> index
        for (let leftIndex = 0; leftIndex < mainIndex; leftIndex++) {
            const element = array[leftIndex];
            leftSum += array[leftIndex]
        }
        // right loop       index -> end
        for (let rightIndex = mainIndex + 1; rightIndex < array.length; rightIndex++) {
            rightSum += array[rightIndex]

        }
        if (rightSum === leftSum) {
            console.log(mainIndex);
            return;
        }
        // compare the loopSums         if true? print the index       

    }
    console.log("no");
}




equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums ([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])