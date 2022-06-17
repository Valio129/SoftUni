function solve(arg) {
  let input = arg.shift();
  let minNum = Number.MAX_SAFE_INTEGER;
  while (input !== "Stop") {
    let currNum = Number(input);
    if (currNum < minNum) {
      minNum = currNum;
    }
    input = arg.shift();
  }
  console.log(minNum);
}
solve(["100", "99", "80", "70", "Stop"]);
solve(["-10", "20", "-30", "Stop"]);
solve(["-1", "-2", "Stop"]);
