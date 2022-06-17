function solve(arg) {
  let studentName = arg.shift();
  let classCounter = 1;
  let currentGrade = Number(arg.shift());
  let avgGrade = 0;
  while (currentGrade >= 4.0) {
    avgGrade += currentGrade;
    classCounter++;
    currentGrade = Number(arg.shift());
  }
  if (currentGrade < 4) {
    console.log(`${studentName} has been excluded at ${classCounter} grade`);
  } else {
    avgGrade /= 12;
    console.log(
      `${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`
    );
  }
}
solve([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
