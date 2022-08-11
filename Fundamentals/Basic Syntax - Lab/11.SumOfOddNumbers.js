function solve(n) {
    let counter = 0
    let sum = 0
    let currentNum = 0;
    while (counter < n) {
        currentNum++
        if (currentNum % 2 !== 0) {
            sum += currentNum
            counter++
            console.log(currentNum);
        }
    }
    console.log(`Sum: ${sum}`);
} solve(3)