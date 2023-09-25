function solve (cmds) {
    let list = [];
    const obj = {

        add: function (str) {
            list.push(str)
        },

        remove: function (str) {
            list = list.filter(x => x!== str);
        },

        print: function () {
             console.log(list.join(','))
        },
    }

    for (let cmd of cmds) {
        const [command, value] = cmd.split(' ');
        (obj[command])(value);
    }
    return obj
}

let createListProcessor = solve (['add hello', 'add again', 'remove hello', 'add again', 'print'])
