/**
 * 
 * 
 */
function solve(arr) {
    let parking = new Map()
    arr.forEach(el => {
        let [direction, carNumber] = el.split(', ')
        switch (direction) {
            case 'IN':
                parking.set(carNumber, direction)
                break;
            case 'OUT':
                if (parking.has(carNumber)) {
                    parking.delete(carNumber)
                }

            default:
                break;
        }
    });
    let arrKyes = Array.from(parking.keys())
    let sortedArr = arrKyes.sort((a, b) => {

        return a.localeCompare(b)
    })
    if (sortedArr.length > 0) {
        for (const el of sortedArr) {
            console.log(el);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']


)








let parking = {}
//     arr.forEach(el => {
//         let [direction, carNumber] = el.split(', ')
//         switch (direction) {
//             case 'IN':
//                 parking[carNumber] = direction
//                 break;
//             case 'OUT':
//                 if (parking.hasOwnProperty(carNumber)) {
//                     if (parking[carNumber] === 'IN') {
//                         parking[carNumber] = 'OUT'
//                     }
//                 }
//             default:
//                 break;
//         }
//     });
//     // let sortedNums = parking.map(num => num.slice(2, 6)).sort((a, b) => b - a)
//   let insideArr =  Object.keys(parking).filter(a => parking[a] === 'IN').sort((a, b) => {

//         return a.slice(2, 6) - b.slice(2, 6)
//     })
//     if (insideArr.length > 0) {
//         for (const num of parking['IN']) {
//             console.log(num);
//         }
//     } else {
//         console.log('Parking Lot is Empty');
//     }