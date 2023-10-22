function e(type, attr, ...content) {
    let element = document.createElement(type);
    for (const prop in attr) {
        prop == 'class' ? element.classList.add(attr[prop]) : element[prop] = attr[prop];
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
function createEl(type, attr, ...content) {
    let element = document.createElement(type);
    for (const prop in attr) {
        element[prop] = attr[prop];
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