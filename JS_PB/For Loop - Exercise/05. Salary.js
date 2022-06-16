function solve(input) {
    let tabCount = input[0]
    tabCount = input.shift();
    let isZero = false;
    let salary = input[0]
    salary = input.shift();
    for (let i = 0; i <= tabCount; i++) {
        let currentSite = input[i];
        if (currentSite === "Facebook") {
            salary -= 150;
        } else if (currentSite === "Instagram") {
            salary -= 100;
        } else if (currentSite === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            isZero = true;
            break;
        }
    }
    if (isZero || salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(Math.trunc(salary))
    }
}
