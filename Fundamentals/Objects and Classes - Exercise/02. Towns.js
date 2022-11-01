// crate class 
// for every token create new obj town and print it 
function townsInfo(townsData) {
    for (let token of townsData) {
        let currTown = {}
        let [town, latitude, longitude] = token.split(' | ')
        currTown.town = town
        currTown.latitude = Number(latitude).toFixed(2)
        currTown.longitude = Number(longitude).toFixed(2)
        // const currLatitude = Number(token[1]).toFixed(2)
        // const currLongitude = Number(token[2]).toFixed(2)
        // let currTown = new Town (token[0],currLatitude,currLongitude)
        console.log(currTown);
    }
}
townsInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)