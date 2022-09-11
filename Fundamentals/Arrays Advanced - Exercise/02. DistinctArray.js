function repeatingNums(array) {
    let resultArr = []
    for (num of array) {
        if (!resultArr.includes(num)) {
            resultArr.push(num)
        }
    }
    console.log(resultArr.join(' '));
}
repeatingNums([7, 8, 9, 7, 2, 3, 4, 1, 2])