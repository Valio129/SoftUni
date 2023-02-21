function getPrevDay(year, month, day) {
    let prevDayDate = new Date(year, month - 1, day - 1);
    const prevDay = prevDayDate.getDate();
    const pevDateMonth = prevDayDate.getMonth() + 1;
    const pevDateYear = prevDayDate.getFullYear();
    console.log(`${pevDateYear}-${pevDateMonth}-${prevDay}`);
}
getPrevDay(2016, 7, 10);
getPrevDay(2015, 1, 1);