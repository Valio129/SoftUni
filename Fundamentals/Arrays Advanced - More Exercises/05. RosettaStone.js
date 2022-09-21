function solve(array) {
    let linesOfMatrix = Number(array.shift())
    let matrix = []
    for (let i = 1; i <= linesOfMatrix; i++) {
        matrix.push(array.shift().split(' ').map(Number))
    }
    console.table(matrix)
}
solve([ '2',

'31 32',

'74 37',

'19 0 23 25',

'22 3 12 17',

'5 9 23 11',

'12 18 10 22' ] )