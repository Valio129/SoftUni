function solve(arg) {
    let firstNum = Number(arg.shift());
    let currNum = Number(arg.shift());

    while (currNum < firstNum) {
        currNum += Number(arg.shift());
    }
    console.log(currNum);
} solve(["100",
"10",
"20",
"30",
"40"]);