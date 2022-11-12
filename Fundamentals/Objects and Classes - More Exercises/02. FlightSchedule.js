// put into an obj the data from array at index 0
// change the values of the existing flights with the data from the second array index 1 
// print the obj mathicng the value from index 2

function flights(arr) {
    let initFlights = arr[0]
    let flights = {}

    for (element of initFlights) {
        [sector, first, second] = element.split(' ')
        let destination = first
        if (second !== undefined) {
            destination += " " + second
        }
        flights[sector] = { Destination: destination, Status: "Ready to fly" }
    };
    for (el of arr[1]) {
        [sector, value] = el.split(' ')
        if (Object.keys(flights).includes(sector)) {
            flights[sector].Status = value
        }
    }
    let status = arr[2][0]
    for (let key in flights) {
        if (flights[key].Status === status) {
            console.log(flights[key])
        }
    }
}
flights([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])