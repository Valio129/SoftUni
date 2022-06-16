function onTimeForTheExam(input) {
    const zeroPad = (num, places) => String(num).padStart(places, '0') //LEADING ZERO FUNCTION ES2017

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTime = (examHour * 60) + examMin;
    let arrivalTime = (arriveHour * 60 ) + arriveMin;
    var isDiff = false;
    let timeDiff;
    let arrival;

    if (examTime-arrivalTime> 30) {                                                         // early
        arrival = "Early";
        if (examTime !== arrivalTime && examTime -arrivalTime < 60 ) {
            isDiff= true;
            timeDiff= `${(examTime -arrivalTime)} minutes before the start`;
        } else if ( examTime !== arrivalTime && examTime -arrivalTime >= 60 ){
            isDiff= true;
            timeDiff= `${Math.trunc((examTime -arrivalTime)/60)}:${zeroPad(((examTime -arrivalTime)%60), 2 )} hours before the start`;
  
        }
    } else if (examTime >= arrivalTime) {                                                       //On time
        arrival = "On time";
        if (examTime !== arrivalTime && examTime -arrivalTime < 60 ) {
            isDiff= true;
            timeDiff= `${(examTime -arrivalTime)} minutes before the start`;
        } else if ((examTime !== arrivalTime && examTime -arrivalTime >= 60 )) {
            isDiff= true;
            timeDiff= `${Math.trunc((examTime -arrivalTime)/60)}:${zeroPad(((examTime -arrivalTime)%60), 2 )} hours before the start`;
  
        }
    } else {                                                                                                    //late
        arrival = "Late";
        if (arrivalTime - examTime  < 60 ) {
            isDiff= true;
            timeDiff= `${( arrivalTime - examTime )} minutes after the start`;
        } else if (arrivalTime - examTime >= 60){
            isDiff= true;
            timeDiff= `${Math.trunc((arrivalTime - examTime)/60)}:${zeroPad(((arrivalTime - examTime)%60), 2 )} hours after the start`;
  
        }
    }

    

    console.log(arrival)
    if (isDiff) {
        console.log(timeDiff)
    }
}   

onTimeForTheExam(["9", "00", "10", "30"]);