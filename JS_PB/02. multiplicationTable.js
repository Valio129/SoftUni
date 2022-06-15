function multiplication(input) {
    let numMultiply = Number(input[0]);
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * ${numMultiply} = ${index * numMultiply}`);

    }
} 
multiplication(['5'])