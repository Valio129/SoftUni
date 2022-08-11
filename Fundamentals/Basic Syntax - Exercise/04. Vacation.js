function vacation(groupCount, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            switch (type) {
                case "Students":
                    price = 8.45
                    break;
                case "Business":
                    price = 10.90
                    break;
                case "Regular":
                    price = 15
                    break;

                default:
                    break;
            }
            break;
        case "Saturday":
            switch (type) {
                case "Students":
                    price = 9.80
                    break;
                case "Business":
                    price = 15.60
                    break;
                case "Regular":
                    price = 20
                    break;

                default:
                    break;
            }
            break;
        case "Sunday":
            switch (type) {
                case "Students":
                    price = 10.46
                    break;
                case "Business":
                    price = 16
                    break;
                case "Regular":
                    price = 22.50
                    break;

                default:
                    break;


            }
            break;
    }
    let result = groupCount * price
    switch (type) {
        case "Students":
            if (groupCount >= 30) {
                result -= result * 0.15
            }
            break;
        case "Business":
            if (groupCount >= 100) {
                result -= 10 * price
            }
            break;
        case "Regular":
            if (groupCount >= 10 && groupCount <= 20) {
                result -= result * 0.05
            }
            break;


    }
    console.log(`Total price: ${result.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday")