function solve([first, second, third]) {
    let password = first.concat(second)
        .toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for (let i = 0; i < password.length; i++) {
        const curChar = password[i];
        if (vowels.includes(curChar)) {
            const replChar = third[counter]
            counter++
            if (counter >= third.length) {
                counter = 0
            }
            password = password.replace(curChar, replChar.toUpperCase())
        }
    }
    password = password.split('')
        .reverse()
        .join('')
    console.log(`Your generated password is ${password}`);

}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange']
)