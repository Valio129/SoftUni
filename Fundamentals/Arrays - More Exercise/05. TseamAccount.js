function steam(array) {
    let library = array[0].split(' ')
    for (let index = 1; index < array.length; index++) {
        if (array[index] === 'Play!') {
            break;
        }
        const current = array[index].split(' ')
        let command = current[0]
        let game = current[1]



        switch (command) {
            case 'Install':
                if (library.includes(game) === false) {
                    library.push(game)
                }
                break;
            case 'Uninstall':
                if (library.includes(game) === true) {
                    library.splice(library.indexOf(game), 1)
                }
                break;
            case 'Update':
                if (library.includes(game) === true) {
                    library.splice(library.indexOf(game), 1)
                    library.push(game)
                }
                break;
            case 'Expansion':
                game = game.split("-")
                let oldGame = game[0]
                let newGame = game[1]
                if (library.includes(oldGame) === true) {
                    let workingIndex = library.indexOf(oldGame)
                    const expansion = `${oldGame}:${newGame}`
                    library.splice((workingIndex + 1), 0, expansion)
                }
                break;

            default:
                break;

        }
    }
    console.log(library.join(' '));
}
steam(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
steam(['CS WoW Diablo',

    'Uninstall XCOM',

    'Update PeshoGame',

    'Update WoW',

    'Expansion Civ-V',

    'Play!'])