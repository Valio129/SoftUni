function solve(commands) {
    let num = 1
    let output = []
    for (let index = 0; index < commands.length; index++) {
        let currCommand = commands[index] 
        if (currCommand === "add") {
            output.push(num)
        } else if (currCommand === "remove") {
            output.pop(num)
        }
        num++
    }
 if  ( output.length === 0 ) output.push("Empty") 
    console.log(output.join(' '));
}
solve(['add', 'add', 'remove', 'add', 'add'])
// solve(['add', 'add', 'add', 'add'] )
// solve(['remove', 'remove', 'remove']  )