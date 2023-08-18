function generateReport() {
    // get headers
    let headerEl = Array.from(document.querySelectorAll('table thead tr th'));
    // get table data
    let data = Array.from(document.querySelectorAll('table tbody tr'));
    // create output arr, that  later on will be joined by new line 
    let output = [];
    let checkedHeaders = [];
    //get checked headers strings
    for (let i = 0; i < headerEl.length; i++) {
        const th = headerEl[i];
        let childNodes = Array.from(th.childNodes);
        if (childNodes[1].checked === true) {
            // console.log(th.textContent);
            checkedHeaders.push(i);
        }
    }
    // get information from each table row
    data.forEach(row => {
        let x = [];
        let cells = Array.from(row.cells);
        for (let i = 0; i < cells.length; i++) {
            const cellEl = cells[i];
            if (checkedHeaders.includes(i)) {
                // console.log(cellEl.textContent);
                x.push(cellEl.textContent);
            }
        }
        let resultObj = {};
        for (const index of checkedHeaders) {
            let key = headerEl[index].childNodes[1].name;
            let value = row.cells[index].textContent;
            resultObj[key] = value;
        }
        output.push(resultObj);
    });
    // console.log(JSON.stringify(output));
    // PRINT OUTPUT 
    let textArea = document.getElementById('output');
    textArea.textContent = JSON.stringify(output);
    // console.log(data);
    console.log(headerEl);
}