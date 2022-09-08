function numOrder(array) {
    let arr = []
    for (let element of array) {
        element = Number(element)
        if (element < 0) {
            arr.unshift(element)
        } else {
            arr.push(element)
        }
    }
    console.log(arr.join("\n"));
}
numOrder(['7', '-2', '8', '9'])
numOrder(['3', '-2', '0', '-1'])