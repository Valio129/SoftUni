function isLeap(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isLeap(2000)   
isLeap(2003)   
isLeap(4)   