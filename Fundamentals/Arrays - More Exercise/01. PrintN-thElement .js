function print(array) {
    let arr = array
    const step = Number(arr.pop())
    let output = []
    for (let index = 0; index < arr.length; index += step) {
        if (index < arr.length) {

            output.push((arr[index]))
        }

    }
    console.log(output.join(' '))
}

print(['5', '20', '31', '4', '20', '2'])
print(['dsa', 'asd', 'test', 'test', '2'])
print(['1', '2', '3', '4', '5', '6'])