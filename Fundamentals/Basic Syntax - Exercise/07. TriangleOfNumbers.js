function loopFigure(n) {
    for (let row = 1; row <= n; row++) {
        let sequencePerLine = ""
        for (let colls = 1; colls <= row; colls++) {

            sequencePerLine += `${row} `
        }
        console.log(sequencePerLine);
    }
} loopFigure(5)