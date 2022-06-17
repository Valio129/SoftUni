function solve(args) {
  const badGradesLimit = Number(args.shift());

  let badGradesCounter = 0;
  let avgScore = 0;
  let problemsCount = 0;
  let i = 0;

  let currentProblem = args[i];
  i++;
  let currentGrade = Number(args[i]);

  while (badGradesCounter < badGradesLimit && currentProblem !== "Enough") {
    problemsCount++;
    if (currentGrade <= 4) {
      badGradesCounter++;
    }
    avgScore += currentGrade;
    i++;
    currentProblem = args[i];
    i++;
    currentGrade = Number(args[i]);
  }
  avgScore /= problemsCount;
  if (currentProblem === "Enough") {
    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${problemsCount}`);
    console.log(`Last problem: ${args[i - 3]}`);
  } else {
    console.log(`You need a break, ${badGradesLimit} poor grades.`);
  }
}
solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
