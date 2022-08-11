function sumi(numbers) {
    let num = String(numbers)
    let sum = 0
    for (let i = 0; i < num.length; i++) {

        sum += Number(num[i])
    }
    console.log(sum);
} sumi(543)