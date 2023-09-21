// TO DO: fix not showing false when there is empty cell
function solve() {

    const [checkBtn, clearBtn] = Array.from(document.querySelectorAll('#exercise table tfoot td button'));
    // console.log(checkBtn); 
    // console.log(clearBtn);
    const tbody = Array.from(
        document.querySelectorAll('#exercise table tbody tr')
    );
    // console.log(rows);
    checkBtn.addEventListener('click', checkResult);
    clearBtn.addEventListener('click', clear);

    // function hasDuplicates(array) {
    //     let isDuplicate = false;
    //     let set = new Set(array);
    //     if ((set.size !== array.size) || array.includes('')) {
    //         isDuplicate = true;
    //     }
    //     console.log(isDuplicate);
    //     return isDuplicate;

    // }
    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }

    function clear(e) {
        for (let index = 0; index < tbody.length; index++) {
            let tr = Array.from(tbody[index].children);
            for (let trIndex = 0; trIndex < tr.length; trIndex++) {
                const td = tr[trIndex];
                td.children[0].value = '';
                const table = document.getElementsByTagName('table')[0];
                table.style.border = 'none';
                let out = document.querySelector('#check p');
                out.textContent = '';
            }

        }
    }

    function checkResult(e) {
        for (let index = 0; index < tbody.length; index++) {
            let tr = Array.from(tbody[index].children);
            for (let trIndex = 0; trIndex < tr.length; trIndex++) {
                const td = tr[trIndex];
                let col = [];
                for (let i = 0; i < tbody.length; i++) {
                    const firstTd = tbody[i].children[trIndex];
                    col.push(firstTd);
                }
                // console.log([td]);
                // console.log(col);
                const row = tr.map(cell => cell = cell.children[0].value);
                // console.log(row);
                // console.log(tr);
                const column = col.map(cell => cell = cell.children[0].value);
                // console.log(column);
                if (row.every(e => e !== '') && Array.from(column).every(e => e !== '')) {
                    if ((hasDuplicates(row)) || (hasDuplicates(Array.from(column)))) {
                        const table = document.getElementsByTagName('table')[0];
                        table.style.border = '2px solid red';
                        let out = document.querySelector('#check p');
                        out.textContent = 'NOP! You are not done yet...';
                        out.style.color = 'red';
                    } else if (hasDuplicates(row) == false && hasDuplicates(Array.from(column)) == false) {
                        const table = document.getElementsByTagName('table')[0];
                        table.style.border = '2px solid green';
                        let out = document.querySelector('#check p');
                        out.textContent = 'You solve it! Congratulations!';
                        out.style.color = 'green';
                    }
                }
            }

        }

    }

}