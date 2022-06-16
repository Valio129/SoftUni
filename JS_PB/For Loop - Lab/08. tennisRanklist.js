function solve(input) {
    let tournamentCount = Number(input.shift());
    let startingPoints = Number(input.shift());
    let avgPts = 0;
    let winCounter = 0;
    for (let i = 0; i < tournamentCount; i++) {
        let currentPosition = input[i];
        switch (currentPosition) {
            case "W":
                startingPoints += 2000;
                avgPts += 2000;
                winCounter++;
                break;
            case "F":
                startingPoints += 1200;
                avgPts += 1200;
                break;
            case "SF":
                startingPoints += 720;
                avgPts += 720;
                break;
        }
    }
    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor((avgPts / tournamentCount))}`);
    console.log(`${((winCounter / tournamentCount) * 100).toFixed(2)}%`);

} solve(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"]);