function convert(centuries) {
    let toYears = centuries * 100
    let toDays = Math.trunc(toYears * 365.2422)
    let toHours = toDays * 24
    let toMins = toHours * 60
    console.log(`${centuries} centuries = ${toYears} years = ${toDays} days = ${toHours} hours = ${toMins} minutes`);
} convert(1)