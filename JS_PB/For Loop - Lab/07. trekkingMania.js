function solve(input) {
    let groupCount = Number(input.shift())
    let musalaProc = 0;
    let monblanProc = 0;
    let kilimanjaroProc = 0;
    let kTwoProc = 0;
    let everestProc = 0;

    let peopleCount = 0;
    for (let i = 0; i < groupCount; i++) {
        let currentCount = Number(input[i]);
        peopleCount += currentCount;
        if (currentCount <= 5) {
            musalaProc += currentCount;
        } else if (currentCount <= 12) {
            monblanProc += currentCount;
        } else if (currentCount <= 25) {
            kilimanjaroProc += currentCount;
        } else if (currentCount <= 40) {
            kTwoProc += currentCount;
        } else if (currentCount >= 41) {
            everestProc += currentCount;
        }

    }
    console.log(`${((musalaProc / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((monblanProc / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroProc / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((kTwoProc / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((everestProc / peopleCount) * 100).toFixed(2)}%`);
} solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);