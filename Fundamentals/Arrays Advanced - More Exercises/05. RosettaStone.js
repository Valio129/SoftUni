function solve(array) {
    let linesOfMatrix = Number(array.shift())
    let matrix = []
    let wheel = [' ']
    for (let index = 65; index <= 90; index++) {
        wheel.push(String.fromCharCode(index))
    }
    for (let i = 1; i <= linesOfMatrix; i++) {
        matrix.push(array.shift().split(' ').map(Number))
    }
    let encodedMessage = array.map(str => str.split(' ').map(Number))
    const matrixLength = matrix[0].length // can be editable
    const matrixHeight = matrix.length
    let out = []
    let matrixRow = 0
    for (let row = 0; row < encodedMessage.length; row++) {
        let matrixCol = 0
        for (let col = 0; col < encodedMessage[row].length; col++) {

            if (row <= encodedMessage.length - 1 && col <= encodedMessage[row].length - 1
                && row >= 0 && col >= 0
            ) {

                let resultNum = matrix[matrixRow][matrixCol] + encodedMessage[row][col]   // switchable


                while (wheel[resultNum] === undefined) {
                    resultNum -= 27
                }
                encodedMessage[row][col] = wheel[resultNum]

            }
            matrixCol++
            if (matrixCol >= matrixLength) {
                matrixCol = 0
            }
        }
        matrixRow++
        if (matrixRow >= matrixHeight) {
            matrixRow = 0
        }
    }

    for (let iterator of encodedMessage) {
        for (let ofset of iterator) {
            out.push(ofset)
        }
    }
    console.log(out.join(''));
}
solve(['2',

    '31 32',

    '74 37',

    '19 0 23 25',

    '22 3 12 17',

    '5 9 23 11',

    '12 18 10 22'])