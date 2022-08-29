function isPalindromeInteger(numArr) {
    for (el of numArr) {
        let currNum = el
        let mirrorNum = el.toString().split("").reverse().join("")
        console.log(currNum == mirrorNum);
    }
}
isPalindromeInteger([123, 323, 421, 121])