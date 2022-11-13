function meetings(peopleArr) {
    let meetings = {}
    peopleArr.forEach(token => {
        let [day, person] = token.split(' ')
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = person
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    })
    for (const [day, person] of Object.entries(meetings)) {
        console.log(`${day} -> ${person}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)