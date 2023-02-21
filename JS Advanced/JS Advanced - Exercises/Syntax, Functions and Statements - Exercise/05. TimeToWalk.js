function getTimeToWalk(steps, length, speed) {
    //  crate totalTime in minutes
    //  to get the rest minutes -> meters / 500
    //  meters /= 1000 to get the value in kilomters
    //   s = v*t; t = s/v - get the time in kilometers
    //   t *= 60, totalTime += t
    //print time  
    let totalTimeSeconds = 0;
    const restMinutes = steps / 500;
    const lentgthKm = length / 1000;
    const timeInHours = (lentgthKm / speed);
    totalMinutes += timeInHours * 60;
    console.log(totalMinutes);
    const totalHours = totalMinutes / 60;
    const totalSeconds = totalMinutes * 60;
    console.log(`${totalHours}:${totalMinutes}:${totalSeconds}`);

}
getTimeToWalk(4000, 0.60, 5);
