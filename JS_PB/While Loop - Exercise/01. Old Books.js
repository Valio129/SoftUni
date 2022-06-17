function solve(arg) {
  const desiredBook = arg.shift();
  let currentBook = arg.shift();
  let bookCounter = 0;
  while (currentBook !== desiredBook && currentBook !== "No More Books") {
    bookCounter++;
    currentBook = arg.shift();
  }
  if (currentBook === "No More Books") {
    console.log("The book you search is not here!");
    console.log(`You checked ${bookCounter} books.`);
  } else {
    console.log(`You checked ${bookCounter} books and found it.`);
  }
}
solve([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
