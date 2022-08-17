function day(num) {
    let daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (num > 0 && num < 8) {

        console.log(daysArr[num - 1]);
    } else {
        console.log('Invalid day!');
    }
}
day(1)
day(7)
day(8)