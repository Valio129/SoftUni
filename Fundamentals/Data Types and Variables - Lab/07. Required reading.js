function pages(pagesNum, pagesPerHour, targetDays) {
    let totalHours = (pagesNum / pagesPerHour);
    let hoursPerDay = totalHours / targetDays;

    // print hours Per day for certain amount of days
    console.log(hoursPerDay);
}
pages(212,
    20,
    2)