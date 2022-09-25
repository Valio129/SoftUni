function nextDay(year, month, day) {

    let out = new Date(year, month, day)
    out.setHours(0, 0, 0, 0);
    
    console.log(out)
}

nextDay(2020, 3, 30)