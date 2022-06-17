function solve(arg) {
  let input = arg.shift();
  let maxNum = Number.MIN_SAFE_INTEGER;
  while (input !== "Stop") {
    let currNum = Number(input);
    if (currNum > maxNum) {
      maxNum = currNum;
    }
    input = arg.shift();
  }
  console.log(maxNum);
}
// solve(["100", "99", "80", "70", "Stop"]);
// solve(["-10", "20", "-30", "Stop"]);
// solve(["45", "-20", "7", "99", "Stop"]);
// solve(["999", "Stop"]);
solve(["-1", "-2", "Stop"]);
