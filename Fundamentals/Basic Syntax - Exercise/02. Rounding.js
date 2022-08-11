function solve(number, prec) {
    let num = Number(number)
    let precision = Number(prec)
    if (precision > 15) {
        precision = 15
    }   
    console.log(parseFloat(num.toFixed(precision)));
} solve(10.5, 3)