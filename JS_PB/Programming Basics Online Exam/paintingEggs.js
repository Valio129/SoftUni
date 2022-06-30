
//  red      green   yellow
// Големи (Large)   16 лв.  12 лв.   9 лв.
// Средни (Medium)  13 лв.  9 лв.    7 лв.
// Малки (Small)    9 лв.   8 лв.    5 лв

function easterPainting(params) {
    let eggSize = params[0]
    let eggColor = params[1]
    let amount = Number(params[2])
    let price = 0;
    switch (eggColor) {
        case "Red":
            switch (eggSize) {
                case "Small":
                    price = 9
                    break;
                case "Medium":
                    price = 13
                    break;
                case "Large":
                    price = 16
                    break;
            }
            break;
        case "Green":
            switch (eggSize) {
                case "Small":
                    price = 8
                    break;
                case "Medium":
                    price = 9
                    break;
                case "Large":
                    price = 12
                    break;
            }
            break;
        case "Yellow":
            switch (eggSize) {
                case "Small":
                    price = 5
                    break;
                case "Medium":
                    price = 7
                    break;
                case "Large":
                    price = 9
                    break;
            }
            break;
    }
    let finalSum = price * amount
    finalSum -= finalSum * 0.35
    console.log(`${finalSum.toFixed(2)} leva.`);
} easterPainting(["Small",
    "Yellow",
    "3"])