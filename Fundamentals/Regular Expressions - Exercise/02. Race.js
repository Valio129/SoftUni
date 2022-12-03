function solve(racers) {
    let scoreboard = racers.shift()
        .split(', ').map(name => name = `"${name}": 0`).join(', ')
    scoreboard = `{ ${scoreboard}}`
    scoreboard = JSON.parse(scoreboard)
    let namePattern = /[A-Za-z]+/g
    let scorePattern = /\d+/g
    racers = racers.slice(0, racers.indexOf('end of race'))
    for (const racer of racers) {
        let curDist = racer.match(scorePattern)
            .join('')
            .split('')
            .map(Number)
            .reduce((a, b) => a + b, 0)
        // console.log();
        const racerName = racer.match(namePattern).join('')
        if (scoreboard.hasOwnProperty(racerName)) {
            curDist += scoreboard[racerName]
            scoreboard[racerName] = curDist
        }
    }
    let winners = Object.keys(scoreboard)
        .sort((a, b) => scoreboard[b] - scoreboard[a])
    console.log(`1st place: ${winners[0]}`);
    console.log(`2nd place: ${winners[1]}`);
    console.log(`3rd place: ${winners[2]}`);


}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)