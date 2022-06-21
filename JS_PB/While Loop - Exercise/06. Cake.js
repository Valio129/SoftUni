function solve(param) {
    let i = 0;
    const cakeWidth = Number(param[i]);
    i++;
    const cakeHeight = Number(param[i]);
    const cakeSize = cakeHeight * cakeWidth;
    let currentCakeSize = cakeSize;
    i++;
    let input = param[i];
    while (input !== "STOP" && currentCakeSize > 0) {
        let currentPieces = Number(input)
        currentCakeSize -= currentPieces;
        i++;
        input = param[i];
    }
    if (currentCakeSize >= 0) {
        console.log(`${currentCakeSize} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(currentCakeSize)} pieces more.`);
    }

} solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])