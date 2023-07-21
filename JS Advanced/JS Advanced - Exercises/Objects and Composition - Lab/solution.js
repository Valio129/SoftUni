function fromJSONToHTMLTable(inputArr) {
    let output = '<table>';
    let arr = JSON.parse(inputArr);
    function escape(htmlStr) {
        return htmlStr.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    }
    // check for special sybols
    // get only the keys of the objects as headings
    output += `\n`;
    output += `   <tr>`;
    for (const heading of Object.keys(arr[0])) {
        if (typeof heading == 'string') {
            escape(heading);
        }
        output += `<th>${(heading)}</th>`;
    }
    output += `</tr>\n`;
    //  for every other line get only the keys of the object 
    for (const obj of arr) {
        output += `   <tr>`;
        for (const value of Object.values(obj)) {
            if (typeof value == 'string') {
                escape(value);
            }
            output += `<td>${value}</td>`;
        }
        output += `</tr>\n`;
    }
    output += '</table>\n';
    return output;
}
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);