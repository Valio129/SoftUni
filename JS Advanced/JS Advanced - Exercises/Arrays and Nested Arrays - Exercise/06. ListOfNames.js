function solve(nameList) {
    nameList = nameList.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < nameList.length; i++) {
        console.log(`${i + 1}.${nameList[i]}`);

    }
}
solve(["John",
    "Bob",
    "Christina",
    "Ema"]
);