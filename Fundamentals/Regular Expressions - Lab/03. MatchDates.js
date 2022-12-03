function solve(dates) {
    let regex = /(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g
    dates = dates.shift()
    dates = dates.matchAll(regex)

    for (const date of dates) {
       
        if (date !== null) {

            const day = date.groups["day"]
            const month = date.groups["month"]
            const year = date.groups["year"]
            console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        }
    }
}
solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])