function solve(month, year) {
    let res = new Date(year, month, 0).getDate();
    console.log(res);
}

solve(1, 2012);