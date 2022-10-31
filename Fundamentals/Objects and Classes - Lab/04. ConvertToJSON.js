function convToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor
    };
    let result = JSON.stringify(person);
    console.log(result);
}
convToJSON('Peter', 'Smith',

    'Blond')