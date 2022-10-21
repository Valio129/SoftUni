//  recieve the list and split by "!"
//  keep recievig commands unti "Go Shopping!"
//  print
function solve(input) {
    let shoppingList = input[0].split("!");
    let token = input.shift()
    while (token !== "Go Shopping!") {
        let currLine = token.split(' ')
        const command = currLine.shift()
        const item = currLine.shift()
        switch (command) {
            case 'Unnecessary':
                if (shoppingList.includes(item)) {
                    shoppingList = shoppingList.filter(x => x !== item)
                }
                break;
            case 'Urgent':
                if (!shoppingList.includes(item)) {
                    shoppingList.unshift(item)
                }
                break;
            case 'Correct':
                if (shoppingList.includes(item)) {
                    let newItem = currLine.shift()
                    shoppingList[shoppingList.indexOf(item)] = newItem
                }
                break;
            case 'Rearrange':
                if (shoppingList.includes(item)) {
                    let newItem = shoppingList[shoppingList.indexOf(item)]
                    shoppingList.splice(shoppingList.indexOf(item),1)
                    shoppingList.push(newItem)
                }
                break;
            default:
                break;
        }

        token = input.shift()
    }
    console.log(shoppingList.join(", "));
}
solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    'Urgent Grapes',
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

