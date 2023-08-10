function calc() {
    // TODO: sum = num1 + num2
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let sumEl = document.getElementById('sum');
    sumEl.value = num1 + num2;
}
