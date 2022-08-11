function solve(age) {
    let output = ""
    if (age >= 0) {
        if (age < 3) {
            output = "baby"
        } else if (age < 14) {
            output = "child"
        } else if (age < 20) {
            output = "teenager"
        } else if (age < 66) {
            output = "adult"
        } else if (age >= 66) {
            output = "elder"
        }
    } else {
        output = "out of bounds"
    }
    console.log(output);

} solve (-1)