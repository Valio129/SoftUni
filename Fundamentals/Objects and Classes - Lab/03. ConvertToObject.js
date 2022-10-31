function convertToObj(input) {
    let resultObj = JSON.parse(input)
    for (const token of Object.entries(resultObj)) {
        console.log(token.join(": "));
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')