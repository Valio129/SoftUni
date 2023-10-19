function solution() {
    //TO DO
}
function e(type, attr, ...content) {
    let element = document.createElement(type)
    for (const prop in attr) {
       element[prop] = attr[prop]
    }
    for (let el of content) {
        if (typeof el === 'string'||typeof el === 'number' ) {
            el = document.createTextNode(el);
        }
        element.appendChild(el)
    }
}