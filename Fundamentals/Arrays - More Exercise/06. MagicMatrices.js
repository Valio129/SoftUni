// console.table([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
function magicMatrix(array) {
    let firstSum = 0
    let isMagic = true
    
    for (let index = 0; index < array.length; index++) {
        let colSum = 0
        let rowSum = 0
        // let diagSum = 0

        //colls
        for (let coll = 0; coll < array.length; coll++) {
            const currRow = array[coll]
            colSum += currRow[index]

        }

        //rows
        for (let row = 0; row < array.length; row++) {
            const currColl = array[index]
            rowSum += currColl[row]

        }
        // // diags
        // for (let iter = 0; iter < array[0].length; iter++) {
        //     const ele = array[iter];
        //     diagSum += ele[iter]

        // }

        if (colSum !== rowSum) {
            isMagic = false
            break
        }
        if (index === 0) {
            firstSum = colSum + rowSum
        } else {
            if (firstSum !== colSum + rowSum) {
                isMagic = false
                break
            }
        }


    }


    console.log(isMagic);
}


magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]])
