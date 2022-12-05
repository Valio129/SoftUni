function solve(input) {
    let pattern =/^([\$|%])(?<tag>[A-Z][a-z]{2,})\1\: \[(?<firstNum>(12[0-7]|1[01][0-9]|[1-9]?[0-9]))\]\|\[(?<secondNum>\4)\]\|\[(?<thirdNum>\4)\]\|$/gm
    const count = Number(input.shift())
    for (let i = 0; i < count; i++) {
        let line = input[i];


        const matched = pattern.exec(line)
        if (matched === null) {
        } else {

            const tag = matched.groups["tag"]
            const first = Number(matched.groups["firstNum"])
            const second = Number(matched.groups["secondNum"])
            const third = Number(matched.groups["thirdNum"])
            let output = String.fromCharCode(first, second, third)
            console.log(`${tag}: ${output}`);
            console.log('Valid message not found!');
        }
    }
}
solve(["4",
    "$Request$: [0]|[115]|[105]|",
    " $Taggy$: [73]|[73]|[73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|", "$Request$: [0]|[115]|[105]|",
    " $Taggy$: [73]|[73]|[73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|", "$Request$: [0]|[115]|[105]|",
    " $Taggy$: [73]|[73]|[73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"]


)
