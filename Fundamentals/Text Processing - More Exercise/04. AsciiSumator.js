function ASCIISum(array) {
    let sum = 0
    let start = array[0].charCodeAt(0)
    let end = array[1].charCodeAt(0)
    const string = array[2]
    if (start > end) {
        const temp = start
        start = end
        end = temp
    }
    for (let index = 0; index < string.length; index++) {
        const currCharCode = string.charCodeAt(index);
        if (currCharCode > start && currCharCode < end) {
            sum += currCharCode
        }
    }
    console.log(sum);
}
ASCIISum(['a',

    '1',

    'jfe392$#@j24ui9ne#@$'])