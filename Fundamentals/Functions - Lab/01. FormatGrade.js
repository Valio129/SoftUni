function gradeCheck(grade) {
    let num = grade
    let out = ""
    if (grade < 3.00) {
        out = 'Fail'

        return `${out} (${Math.trunc(num)})`
    } else if (grade < 3.50) {
        out = 'Poor'
    } else if (grade < 4.50) {
        out = 'Good'
    } else if (grade < 5.50) {
        out = 'Very good'
    } else if (grade >= 5.50) {
        out = 'Excellent'
    }

    return `${out} (${num.toFixed(2)})`
}
console.log(gradeCheck(4.49));