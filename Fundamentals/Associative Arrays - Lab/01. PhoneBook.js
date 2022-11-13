function phoneNumbers(arr) {
    let phoneBook = {}
    arr.forEach(el => {
        [contactName, number] = el.split(' ')
        phoneBook[contactName] = number
    });
    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneNumbers(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])