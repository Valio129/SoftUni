function solution() {
    const recipesLib = {
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        apple: { carbohydrate: 1, flavour: 2 },
    };
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    commands = {
        restock: function (microelement, quantity) {
            const value = storage[microelement];
            storage[microelement] = value + Number(quantity);
            // console.log('current value available'  + ` ${ storage[microelement]}`);
            return ('Success');
        },
        prepare: function (recipe, quantity) {
            // const diffStorageObj = {}
            let isEnough = true;
            for (const ingredient in recipesLib[recipe]) {
                if ((recipesLib[recipe][ingredient] * Number(quantity)) > storage[ingredient]) {
                    isEnough = false;
                    return (`Error: not enough ${ingredient} in stock`);
                }
                // diffStorageObj[ingredient] = recipesLib[recipe][ingredient] * Number(quantity);
            }
            if (isEnough) {
                for (const ingredient in recipesLib[recipe]) {
                    (storage[ingredient] = storage[ingredient] - (recipesLib[recipe][ingredient] * Number(quantity)));
                }
                // console.log(storage);
                return ('Success');
            }
        },
        report: function () {
            let out = [];
            Object.entries(storage).forEach(([element, quant]) => out.push(`${element}=${quant}`));
            return out.join(' ')
        }
    };
    function controller(cmds) {
        const [cmd, ...args] = cmds.split(' ');
        return commands[cmd](...args);
    }
    return controller;
}
let manager = solution();


console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

