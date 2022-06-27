function solve(params) {

    let isFinish = false
    let studentTickets = 0;
    let kidTickets = 0;
    let standardTickets = 0;

    let index = 0;
    let input = params[index]

    while (input !== "Finish") {
        let currentName = input
        index++
        let currentFreeSeats = Number(params[index])
        index++
        input = params[index]
        let ticketsCounter = 0;
        while (input !== "End") {

            ticketsCounter++
            switch (input) {
                case "student":
                    studentTickets++
                    break;
                case "kid":
                    kidTickets++
                    break;

                case "standard":
                    standardTickets++
                    break;
            }
            if (ticketsCounter === currentFreeSeats) {
                break;
            }
            index++
            input = params[index]
            if (input === "Finish") {
                isFinish = true
                break;
            }
        }
        let procCurrent = ticketsCounter / currentFreeSeats * 100
        console.log(`${currentName} - ${procCurrent.toFixed(2)}% full.`);
        if (isFinish) {
            break;
        }


        index++
        input = params[index]
    }
    let totalTickets = standardTickets + kidTickets + studentTickets
    let kidProc = kidTickets / totalTickets * 100
    let studentProc = studentTickets / totalTickets * 100
    let standardProc = standardTickets / totalTickets * 100
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentProc.toFixed(2)}% student tickets.`);
    console.log(`${standardProc.toFixed(2)}% standard tickets.`);
    console.log(`${kidProc.toFixed(2)}% kids tickets.`);


} solve(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    " Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])
