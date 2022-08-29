function rangeChecker(charOne, charTwo) {
    let smallestChar = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0))
    let biggesttChar = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0))
    let out = []
    for (let index = smallestChar + 1; index < biggesttChar; index++) {
        out.push(String.fromCharCode(index));

    }
    console.log(out.join(' '));
}
rangeChecker("a", "d")

