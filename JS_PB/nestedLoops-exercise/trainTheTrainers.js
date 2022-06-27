function trainersGrader(params) {
    let index = 0;
    let globalAvgScore = 0;
    let titleCounter = 0;
    let juryCount = Number(params[index]);
    index++
    let input = params[index]

    while (input !== "Finish") {
        titleCounter++
        let currentTitle = input

        let currentAvgScore = 0;
        for (let i = 1; i <= juryCount; i++) {
            index++
            currentAvgScore += Number(params[index])

        }
        currentAvgScore /= juryCount;
        console.log(`${currentTitle} - ${currentAvgScore.toFixed(2)}.`);
        globalAvgScore += currentAvgScore

        index++
        input = params[index]
    }
    globalAvgScore /= titleCounter
    console.log(`Student's final assessment is ${globalAvgScore.toFixed(2)}.`);


} trainersGrader(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])