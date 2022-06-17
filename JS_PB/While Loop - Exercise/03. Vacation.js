function solve(args) {
  const targetMoney = Number(args.shift());
  let currentBudget = Number(args.shift());

  let spendCounter = 0;
  let daysCounter = 0;
  while (currentBudget < targetMoney) {
    daysCounter++;
    let action = args.shift();
    let money = Number(args.shift());

    switch (action) {
      case "save":
        currentBudget += money;
        spendCounter = 0;
        break;
      case "spend":
        spendCounter++;
        if (money > currentBudget) {
          currentBudget = 0;
        } else {
          currentBudget -= money;
        }
        if (spendCounter === 5) {
          console.log("You can't save the money.");
          console.log(`${daysCounter}`);
          return;
        }
        break;
    }
  }
  console.log(`You saved the money for ${daysCounter} days.`);
}
solve([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
