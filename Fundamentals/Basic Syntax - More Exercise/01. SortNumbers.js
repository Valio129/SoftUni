function sortNums(a, b, c) {
    let out = [a, b, c]
    let print = out.sort((x, y )=> y - x)
    console.log(print.join("\n"));
}

sortNums(0, 2, 1)