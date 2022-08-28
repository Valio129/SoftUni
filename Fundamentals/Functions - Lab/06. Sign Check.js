function signCheck(numOne, numTwo, numThre) {
    let out = 'Positive'
    let counter = 0
    if (numOne < 0) { counter++ }
    if (numTwo < 0) { counter++ }
    if (numThre < 0) { counter++ }
    if (counter % 2 !== 0) {
        out = "Negative"
    }
    console.log(out);
}
signCheck(-6,

    -12,

    14)