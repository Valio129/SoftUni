function solve(input) {
    let towns = [];
    let headings = input.shift().split('|').filter(a => a.length > 1).map(a => a.trim());
   console.log();
    for (line of input) {
        let [town, latitude, longitude] = line.split('|').filter(a => a.length > 1).map(a => a.trim());
        latitude = Math.round(Number(latitude)* 100)/ 100;
        longitude = Math.round(Number(longitude)* 100)/ 100;
        towns.push({
            "Town": town,
            "Latitude": latitude,
            "Longitude": longitude,
        });
    }
    console.log(JSON.stringify(towns));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);