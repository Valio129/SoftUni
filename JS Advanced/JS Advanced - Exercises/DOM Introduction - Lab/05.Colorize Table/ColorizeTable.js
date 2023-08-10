function colorize() {
    // TODO
    // let rowEls =(document.querySelectorAll('tr:nth-child(even) td'));
    // rowEls.forEach(x => {
    //     x.style.backgroundColor = 'teal'
    //     // console.log(x );
    // });
    // #2
    let rows = Array.from(document.getElementsByTagName('tr'));
    rows.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}