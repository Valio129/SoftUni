/*   
                    INPUT ARRAY
    [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]
    
    */
function solve() {
    const [input, output] = Array.from(document.getElementsByTagName('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
    const tableData = document.getElementsByTagName('table')[0];
    const itemList = (
        tableData.getElementsByTagName('tbody')[0]
            .children
    );
    const lib = {
        img: ['img', 'src'],
        name: 'p',
        price: 'p',
        decFactor: 'p',
    };
    console.log(itemList);

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);


    function generate(e) {
        const inputArray = Array.from(JSON.parse(input.value));
        // console.log(itemList);
        for (const arrObject of inputArray) {
            addToList(createItemFrom(arrObject), itemList);
            console.log(createItemFrom(arrObject));
        }
    }

    function createItemFrom(inputObj) {
        const outputObj = {};
        for (const key in lib) {
            outputObj[key] = inputObj[key];
        }
        // console.log(outputObj);
        return outputObj;
    }
    function generateEl(tag, atr, value) {
        const td = document.createElement('td');
        const el = document.createElement(tag);
        if (atr) {
            el.setAttribute(atr, value);
        } else {
            el.textContent = value;
        }
        td.appendChild(el);
        console.log(typeof td);
        return td;
    }
    function addToList(finalObj, list) {
        console.log(list);
        const tr = document.createElement('tr');
        for (const key in finalObj) {
            let child = generateEl(lib[key][0], lib[key][1], finalObj[key]);
            tr.appendChild(child);

        }
        const checkCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkCell.appendChild(checkbox);
        tr.appendChild(checkCell);
        document.querySelector('table.table tbody').appendChild(tr);
        console.log('here');

    }
    function buy(e) {
        let purchased = [];
        let totalCost = 0;
        let decF = 0;
        let checked = Array.from(document.querySelectorAll('table input[type ="checkbox"]:checked'));
        console.log('checked checkboxes', checked);
        for (const itemRow of checked) {
            console.log(itemRow.parentNode);
            const itemName = itemRow.parentNode.parentElement.children[1].textContent;
            const itemPrice = Number(itemRow.parentNode.parentElement.children[2].textContent);
            const itemDecFactor = Number(itemRow.parentNode.parentElement.children[3].textContent);
            if (!purchased.includes(itemName)) {
                purchased.push(itemName);
            }
            totalCost += itemPrice;
            decF += itemDecFactor;
        }
        decF /= checked.length;
        output.value = `Bought furniture: ${purchased.join(', ')}\nTotal price: ${totalCost.toFixed(2)}\nAverage decoration factor: ${decF}`;
    }
}