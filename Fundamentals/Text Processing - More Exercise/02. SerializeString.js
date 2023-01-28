function solve(arr) {
    /*
    create a obj with letters(chars)
    iterate through string 
    - for each char -> check if it is present into the obj keys
    - add it if needed ([letter]:[]) 
    - add to the corespondending array the current index
    
    - printing array from the obj
    - each arr is printed w/ .split('/') 
    
    */
    const text = arr[0]
    let charracters = {}
    for (let index = 0; index < text.length; index++) {
        const char = text[index];
        if (!charracters.hasOwnProperty(char)) {
            charracters[char] = []
        }
        charracters[char].push(index)
    }
    for (const [char, indexes] of Object.entries(charracters)) {
        console.log(`${char}:${indexes.join('/')}`);
    }
}
solve(["avjavamsdmcalsdm"])