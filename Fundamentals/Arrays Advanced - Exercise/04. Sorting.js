function mySort(arr) {
    let resultArr = arr.slice(0).sort()
    // let resultArr = []
    // for (let index = 0; resultArr.length !== numArr.length; index++) {
    //     const elt = numArr.length - 1 - index
    //     resultArr.push(numArr[index])
    //     resultArr.push(numArr[elt])
    // }
    console.log(resultArr.join(' '));
}
mySort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
mySort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])