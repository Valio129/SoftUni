function biggestNum(a, b, c) {
    let biggest = a
    let array = [a, b, c]
    for (let i = 0; i < array.length; i++) {

        if (biggest < Number(array[i])) {
            biggest = Number(array[i])
        }

    }
     console.log(biggest);

}


biggestNum(43,
    43.2,
    43.1


)