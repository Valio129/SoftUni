function solve(inputArr) {
    let towns = {};
    for (const line of inputArr) {
        let [townName, townPopulation] = line.split(' <-> ');
        townPopulation = Number(townPopulation);
        if (!towns[townName]) {
            towns[townName] = 0;
        }
        towns[townName] += townPopulation;
    }
    for (const [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])