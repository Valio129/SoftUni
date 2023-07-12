function fromJSONToHTMLTable(inputArr) {
    let output = '<table>';
    let arr = JSON.parse(inputArr);
    let tRowsArr = [];
    for (const objEL of arr) {
        for (let heading of Object.keys(objEL)) {

            if (typeof heading == "string") {
                heading = heading.substring(1, heading.length - 2);
            }
            tRowsArr.push(`<th>${heading}</th>`);

        }
        for (let key of Object.values(objEL)) {
            
            if (typeof key == "string") {
                key = key.substring(1, key.length - 2);
            }
            
           tRowsArr.push(`<td>${key}</td>`);
        }
    }
    output += '</table>';
    return output;
}
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);