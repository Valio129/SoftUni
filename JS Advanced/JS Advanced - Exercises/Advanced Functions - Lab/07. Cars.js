function solve(input) {
    function cars() {
        const state = {};

        function create(name, inherit, parentName) {
            const obj = {};
            state[name] = obj;
            if (inherit) {
                Object.setPrototypeOf(obj, state[parentName])
            }
        }

        function set(name, propName, value) {
            state[name][propName] = value;
        }

        function print(name) {
            const obj = state[name];
            const props = getAllProperties(obj);
            console.log(props
                .map(e => `${e[0]}:${e[1]}`)
                .join(',')
            );
        }

        function getAllProperties(obj) {
            let props = Object.entries(obj)
            getParentProps(obj);
            return props;

            function getParentProps(obj) {
                const prototype = Object.getPrototypeOf(obj);
                if (Object.getPrototypeOf(prototype)) {
                    let parentProps = Object.entries(prototype);
                    props = props.concat(parentProps);
                    getParentProps(prototype);
                }
            }
        }

        return {
            create,
            set,
            print
        }
    }

    let carsProcessor = cars();

    input.forEach(element => {
        let tokens = element.split(' ');
        carsProcessor[tokens.splice(0, 1)](...tokens);
    });
}

// function solve(cmds) {
//     const objs = {};
//     const out =   {
//         create: function(name) {
//             objs[name] = {}
//         },
//         print: function(name) {
//             let output = []
//             for (key in objs[name]) {
//                 output.push(`${key}:${objs[name][key]}`)
//             }
//             console.log(output.join(', '));

//         },
//         inherit: function(name,parentName ) {
//             Object.setPrototypeOf(objs[name], objs[parentName]);
//         },
//         set: function(name, key, value)  {
//             objs[name][key]= value;
//         }

//     }
//     for (let cmd of cmds) {
//         cmd = cmd.split(' ')
//         if (cmd.length === 4) {
//             if (cmd[0] === 'create') {

//                 const  command = cmd[0]
//                 const name = cmd[1]
//                 const secondCommand = cmd[2]
//                 const parentName = cmd[3]
//                 out[command](name);
//                 out[secondCommand](name,parentName);

//             } else {
//                 const [command, name, key, value] = cmd
//                 out[command](name, key, value);
//             }
//         } else {
//             (out[cmd[0]])(cmd[1])
//         }

//     }
//     return out
// }

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new','print c1',
    'print c2']
)


