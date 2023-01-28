function deserializeString(inputArr) {
    /*
    convert inputArr elements into object properties
    then convert it into an Object
    create textArr
    iterate through the obj.entries
     - forof the values 
         - textArr[valuesEl] = obj key
     textArr.join()
    */
    inputArr = inputArr.slice(0, inputArr.indexOf('end'))
    for (let i = 0; i < inputArr.length; i++) {
        let arr = inputArr[i]
        arr = arr.split(':')
        let [letter, indexes] = arr
        letter = `"${letter}"`
        indexes = indexes.split('/').map(Number).join(', ')
        indexes = `[${indexes}]`
        arr = `${letter}:${indexes}`
        inputArr[i] = arr
    }
    let charactersObj = JSON.parse(`{${inputArr}}`)
    let textArr = []

    for (const [char, indexes] of Object.entries(charactersObj)) {
        for (const index of indexes) {
            textArr[index] = char
        }
    }
    console.log(textArr.join(''));
}
deserializeString(['a:0/2/4/6',

'b:1/3/5',

'end'])
deserializeString(['a:0/3/5/11',

'v:1/4',

'j:2',

'm:6/9/15',

's:7/13',

'd:8/14',

'c:10',

'l:12',

'end'])