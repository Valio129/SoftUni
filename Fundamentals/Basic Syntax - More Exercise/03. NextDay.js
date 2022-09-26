function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 1)
    date = date.toLocaleDateString()
    date = date.split('/')

    console.log(`${date[2]}-${date[0]}-${date[1]}`)
}

nextDay(2020, 3, 32)