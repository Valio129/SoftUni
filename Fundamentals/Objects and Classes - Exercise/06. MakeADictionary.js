// parse JSON to object add its properties to the dictionary object  
function writeTerms(stringArr) {
    let dictionary = {}
    stringArr.forEach(el => {
        el = JSON.parse(el);
        let prop = Object.entries(el);
        let [term, desc] = prop[0]
        // console.log(term)
        dictionary[term] = desc

    });
    Object.keys(dictionary)
        .sort()
        .forEach((el) => {
            console.log(`Term: ${el} => Definition: ${dictionary[el]}`);
        });
}


writeTerms([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
]
)