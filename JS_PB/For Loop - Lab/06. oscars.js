function solve(input) {
    let actorName = input.shift();
    let startingPoints = Number(input.shift());
    let juryCount = Number(input.shift());
    let isNominatet = false;
    for (let i = 0; i < juryCount; i++) {
        let currentJury = input.shift();
        let currentPoints = Number(input.shift());
        startingPoints += (currentPoints * currentJury.length) / 2;
        if (startingPoints >= 1250.5) {
            isNominatet = true;
            break;
        }

    }
    if (isNominatet || startingPoints >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(startingPoints).toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
    }

} solve(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    ;