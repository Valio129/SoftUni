function solve(input) {
    const targetDays = Number(input[0])
    const plunderPerDay = Number(input[1])
    const expectedPlunder = Number(input[2])
    let totalPlunder = 0
    for (let day = 1; day <= targetDays; ++day) {
        totalPlunder += plunderPerDay
        if (day % 3 === 0) {
            totalPlunder += plunderPerDay * 0.5
        } 
        if (day % 5 === 0) {

            totalPlunder -= totalPlunder * 0.3
        }

    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else if (totalPlunder < expectedPlunder) {
        let percentage = totalPlunder / expectedPlunder * 100
        console.log(`Collected only ${(percentage.toFixed(2))}% of the plunder.`);
    }
}
// solve((["5",

//     "40",

//     "100"]))

solve(["10", "20", "380"])