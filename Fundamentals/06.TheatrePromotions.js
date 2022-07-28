function solve(dayType, age) {
    let output;
    switch (dayType) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                output = 12
            } else if (age > 18 && age <= 64) {
                output = 18
            } else if (age > 64 && age <= 122) {
                output = 12
            } else {
                output = "Error!"
            }
            break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                output = 15
            } else if (age > 18 && age <= 64) {
                output = 20
            } else if (age > 64 && age <= 122) {
                output = 15
            } else {
                output = "Error!"
            }
            break;
        case "Holiday":
            if (age >= 0 && age <= 18) {
                output = 5
            } else if (age > 18 && age <= 64) {
                output = 12
            } else if (age > 64 && age <= 122) {
                output = 10
            } else {
                output = "Error!"
            }

            break;
    }
    if (output != "Error!") {
        console.log(`${output}$`);
    } else {
        console.log(output);
    }


} solve("Weekend",
    100)