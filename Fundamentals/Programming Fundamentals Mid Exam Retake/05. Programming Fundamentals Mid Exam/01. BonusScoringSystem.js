function solve(input) {
    let array = input.slice(0).map(Number);
    const studentsCount = array.shift()
    const lecturesCount = array.shift()
    const bonus = array.shift()
    let biggestBonus = 0
    let maxAttendance = 0
    for (let student = 0; student < studentsCount; student++) {
        const currAttendances = array[student];
        let currBonus = Math.round(currAttendances / lecturesCount * (5 + bonus))
        if (currBonus > biggestBonus) {
            biggestBonus = currBonus
            maxAttendance = currAttendances
        }
    }

    
    console.log(`Max Bonus: ${biggestBonus}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
