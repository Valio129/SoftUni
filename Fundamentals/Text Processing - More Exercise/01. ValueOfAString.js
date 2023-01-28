function solveVOS(arr) {
    const text = arr.shift()
    const command = arr.shift()
    let sum = 0
    for (let index = 0; index < text.length; index++) {
        const charCode = text.charCodeAt(index);
        if (command === 'LOWERCASE') {
            if ((charCode > 96 && charCode < 123)) {
                sum += charCode
            }
        } else if (command === 'UPPERCASE') {
            if ((charCode > 64 && charCode < 91)) {
                sum += charCode
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
solveVOS(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'])