function solve(inputArr) {
    /*
    get elements
    the key arr should have it's own iteration index variable
    loop through string and reduce the value with the element at the same index that the the key arr has 
    */
    const regex = /&(?<type>.+)&[^<]*<(?<coord>.+)>/gm
    const key = inputArr.shift().split(' ').map(Number)
    let messages = inputArr.slice(0, inputArr.indexOf('find'))
    for (let message of messages) {
        message = message.split('')
        let keyIndex = 0
        // decrypt curr message
        for (let index = 0; index < message.length; index++) {
            let currCharCode = message[index].charCodeAt(0)
            currCharCode -= key[keyIndex]
            currCharCode = String.fromCharCode(currCharCode)
            message[index] = currCharCode
            if (keyIndex === key.length - 1) {
                keyIndex = 0
                continue;
            }
            keyIndex++

        }
        const newMess = message.join('')
        // tresure type
        let matches = newMess.matchAll(regex)
        for (const match of matches) {
            console.log(`Found ${match.groups["type"]} at ${match.groups["coord"]}`);

        }
    }

}
solve(["1 4 2 5 3 2 1",

    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,

    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",

    "'stj)>34W68Z@",

    "find"])