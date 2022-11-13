function addresses(arr) {
    let addressBook = {}
    arr.forEach(el => {
       let [person, address] = el.split(':')
        addressBook[person] = address
    });
    let sortedList = Object.keys(addressBook).sort((a,b) => a.localeCompare(b))
    
   for (const el of sortedList) {
        console.log(`${el} -> ${addressBook[el]}`);
   }
}
addresses(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)