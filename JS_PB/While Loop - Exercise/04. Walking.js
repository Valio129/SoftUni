function solve(param) {
    const goalSteps = 10000;
    let index = 0;
    let currentSteps = 0;

    let input = param[index]
    while (goalSteps > currentSteps) {
        if (input === "Going home") {
            index++;
            currentSteps += Number(param[index])
            if (goalSteps < currentSteps) {
                console.log("Goal reached! Good job!");
                console.log(`${currentSteps - goalSteps} steps over the goal!`);
            } else {
                console.log(`${goalSteps - currentSteps} more steps to reach goal.`);
            }
            return;
        }

        currentSteps += Number(input)
        index++;
        input = param[index]
    }
    console.log("Goal reached! Good job!");
    console.log(`${currentSteps - goalSteps} steps over the goal!`);

} solve(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);