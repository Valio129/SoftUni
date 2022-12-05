function solve(input) {
    let text = input.shift()
    input = input.slice(0, input.indexOf('End'))
    for (let token of input) {
        let [command, arg1, arg2] = token.split(' ')

        switch (command) {
            case 'Translate':
                const targetChar = arg1
                const charToRepl = arg2
                let pattern =  new RegExp(targetChar, 'g')
                const newText = text.replace(pattern, charToRepl)
                text = newText
                console.log(text);
                break;

            case 'Includes':
                const targetSub = arg1
                if (text.includes(targetSub)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;

            case 'Start':
                const targetStart = arg1
                if (text.startsWith(targetStart)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                text = text.toLowerCase()
                console.log(text);
                break;
            case 'FindIndex':
                const searchedChar = arg1
                if (text.includes(searchedChar)) {
                    console.log(text.lastIndexOf(searchedChar));
                }
                break;
            case 'Remove':
                const startIndex = Number(arg1)
                const count = Number(arg2)
                let slicedPart = text.substring(startIndex, startIndex + count)
                text = text.replace(slicedPart, '')
                console.log(text);
                break;
            default:
                break;
        }

    }
}
solve((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
)
solve((["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])
)