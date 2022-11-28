function solve(input) {
    input = input.split('\\')
    const file = input.pop()
    const lastComma = file.lastIndexOf('.')
    const fileName = file.substring(0, lastComma)
    const extension = file.substring(lastComma + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx'
)