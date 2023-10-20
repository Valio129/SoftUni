/**
 Get all divs 
 Add gift to list
 - add event listener to the add btn     
    -read Input field
    - create el, filled with the content of interest
    ** LIST MUST be sorted alphabetically
    - add two btns with e-listeners (Make sure that is used bind for the handlers)
    - append to list div 
Add Li el to Sent gifts             |
                                            * USING DELEGATION
Add Li el to Sent discarted gifts   |
* when clicked: 
create new el ONLY with then title and class    
     depending on the btn that's clicked append to the correspondending div   

**/
function solution() {
    const inputField = document.querySelector('.card input');
    const addBtn = document.querySelector('.card button');
    const [list, sent, discarded] = document.querySelectorAll('.card ul');
    // console.log(addBtn);
    // console.log(inputField);
    // console.log(list);
    // console.log(sent);
    // console.log(discarded);
    addBtn.addEventListener('click', addGift);
    // adding gift to  the list
    function addGift(event) {
        const giftTitle = inputField.value;
        inputField.value = '';
        const li = e('li', { 'class': 'gift' }, giftTitle,
            e('button', { 'id': 'sendButton' }, 'Send'),
            e('button', { 'id': 'discardButton' }, 'Discard'));
        li.addEventListener('click',move)
        list.appendChild(li);
        //sorting the list
        const liEls = Array.from(list.children)
            .sort((li1, li2) => (li1.textContent).localeCompare(li2.textContent));
        for (const el of Array.from(list.children)) {
            el.remove();
        }
        for (const el of (liEls)) {
            list.appendChild(el);
        }
    }


    function e(type, attr, ...content) {
        let element = document.createElement(type);
        for (const prop in attr) {
            prop == 'class' ? element.classList.add(attr[prop]) : element[prop] = attr[prop]
        }
        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
        // console.log(element);
    }
    function move(event) {
        const el = event.target
        if (el.tagName == 'BUTTON') {
            const gift = e('li', {'class': 'gift' }, el.parentNode.childNodes[0].textContent)
            if (el.id === 'sendButton') {
               sent.appendChild(gift)
            } else {
                discarded.appendChild(gift)
            }
            el.parentNode.remove()
        }
    }
}


