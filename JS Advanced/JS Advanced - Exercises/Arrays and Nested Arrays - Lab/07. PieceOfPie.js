function solve(pieFlavoursArr, startFlavour, endFlavour) {
    const startIndex = pieFlavoursArr.indexOf(startFlavour);
    const endIndex = pieFlavoursArr.indexOf(endFlavour) + 1;
    const outputPieArr = pieFlavoursArr.slice(startIndex, endIndex);
    return outputPieArr;
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');