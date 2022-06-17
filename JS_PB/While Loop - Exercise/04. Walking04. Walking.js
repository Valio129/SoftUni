function solve(params) {
  const goal = 10000;
  let currentSteps = 0;
  let input = params.shift();
  while (input !== "Going home") {
    currentSteps += Number(input);
    if (currentSteps >= goal) {
      console.log("Goal reached! Good job!");
      console.log(`${currentSteps - goal} steps over the goal!`);
      return;
    }
    input = params.shift();
  }
  currentSteps += Number(input);
  console.log(`${goal - currentSteps} more steps to reach goal.`);
}
solve(["1500", "300", "2500", "3000", "Going home", "200"]);
