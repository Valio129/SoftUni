function solve(nums, actions) {
    nums = nums.slice(0, actions[0])
    nums.splice(0, actions[1])
    let count = 0
    for (let a of nums) {
        if (a === actions[2]) {
            count++
        }
    }
    console.log(`Number ${actions[2]} occurs ${count} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3])
solve([7, 1, 5, 8, 2, 7],

    [3, 1, 5])