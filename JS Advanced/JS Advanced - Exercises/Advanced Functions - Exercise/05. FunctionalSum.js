function add(num) {
    let currSum = 0
    function addToSum(anotherNum) {
        currSum += anotherNum
        return addToSum
    }
    
    addToSum.toString = function () {
        return currSum
    }

    return addToSum(num)
}

console.log(add(1)(-2)(3)(3).toString());