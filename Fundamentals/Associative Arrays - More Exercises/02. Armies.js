function solveArmies(input) {
    /**
     * 
     * leaders {
     *  leader: amries [map] {
            *armyName : armyCount 
     *      }
     *  }
     *  leader: undefied (no army assigned to him)
     * 
     * adding leaders
     * if it has armi in the input :
     *  check first if it exist
     *      else add it with undefined / NULL
     */
    let leaders = {}
    input.forEach(token => {
        if (token.split(' ').length <= 3) {
            token = token.split(' ')
            let action = token.pop()
            let leaderName = token.slice(0).join(' ')
            //ADD / REMOVE LEADER
            switch (action) {
                case 'arrives':
                    leaders[leaderName] = undefined
                    break;
                case 'defeated':
                    delete leaders[leaderName]
                    break;

                default:
                    const armyName = leaderName.split(' ').slice(0, leaderName.length - 2).join(' ')
                    const count = Number(action)
                    for (let leader in leaders) {
                        let armyName = leaders[leader]
                        if (Object.hasOwnProperty(armyName)) {
                            let currCount = armies[leader].get(armyName)
                            armies[leader].set(armyName, currCount + count)
                        }
                    }
                    break;
            }
        } else {
            // armies manipulation but first check for exicsting leaderName
            let [leaderName, army] = token.split(': ')
            let [armyName, armyCount] = army.split(', ')
        }
    });


}
solveArmies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])